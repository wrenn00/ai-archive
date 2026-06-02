import { ScrollTrigger } from "gsap/ScrollTrigger";

let timer: ReturnType<typeof setTimeout> | undefined;

/**
 * ScrollTrigger.refresh() 를 디바운스로 예약한다.
 * 여러 Reveal 가 동시에 마운트돼도 한 번만 재계산하고,
 * (특히 라우트 전환 후 콘텐츠가 실제로 DOM 에 들어온 뒤) 시작 위치를
 * 다시 잡아 첫 페인트에 보이는 요소가 opacity:0 으로 갇히지 않게 한다.
 */
export function scheduleScrollRefresh(delay = 80) {
  if (typeof window === "undefined") return;
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => ScrollTrigger.refresh(), delay);
}
