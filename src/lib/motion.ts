/**
 * 공통 모션 토큰 — 사이트 전체의 reveal/트랜지션이 같은 리듬을 쓰도록 한곳에서 관리.
 * 서버 컴포넌트에서도 import 가능한 순수 상수.
 */

/** expo-out 곡선. GSAP의 power3.out 과 거의 같은 느낌으로 맞춤. */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** 표준 지속시간(초) */
export const DUR = {
  fast: 0.4,
  base: 0.6,
  slow: 0.9,
} as const;

/** 순차 등장 간격(초) — 모든 stagger는 이 값의 배수 */
export const STAGGER = 0.08;

/** reveal 시 기본 y 오프셋(px) */
export const REVEAL_Y = 24;

/** whileInView 공통 옵션 */
export const VIEWPORT = { once: true, margin: "-80px" } as const;
