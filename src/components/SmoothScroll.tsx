"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scheduleScrollRefresh } from "@/lib/scrollRefresh";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.registerPlugin(ScrollTrigger);

    let lenis: Lenis | undefined;
    let tick: ((time: number) => void) | undefined;

    if (!reduce) {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      // Keep ScrollTrigger in sync with Lenis' smoothed scroll position.
      lenis.on("scroll", ScrollTrigger.update);

      tick = (time: number) => lenis!.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    }

    // Lenis가 스크롤을 넘겨받고 레이아웃(폰트/이미지)이 자리잡은 뒤 ScrollTrigger의
    // 시작 위치를 재계산한다. 이게 없으면 첫 페인트에 이미 보이는 요소가
    // 발동되지 않고 opacity:0 으로 멈춰, 스크롤/리사이즈 전까지 안 보인다.
    const onLoad = () => scheduleScrollRefresh();
    scheduleScrollRefresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      if (tick) gsap.ticker.remove(tick);
      lenis?.destroy();
    };
  }, []);

  // 라우트 전환 후에도(전환 애니메이션이 끝나고 새 콘텐츠가 mount된 뒤)
  // 시작 위치를 다시 계산. Reveal 들도 각자 예약하므로 디바운스로 합쳐진다.
  useEffect(() => {
    scheduleScrollRefresh();
  }, [pathname]);

  return <>{children}</>;
}
