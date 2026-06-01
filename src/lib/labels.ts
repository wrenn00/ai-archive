import type { Category, Pricing } from "@/data/tools";

export const categoryLabels: Record<Category, string> = {
  image: "이미지 생성",
  video: "영상 생성",
  "3d": "3D",
  uiux: "UI/UX",
  render: "렌더·업스케일",
  tips: "팁·가이드",
};

export const pricingLabels: Record<Pricing, string> = {
  free: "무료",
  freemium: "부분 무료",
  paid: "유료",
};

/** 화면 표기 순서를 가진 카테고리 목록 */
export const categoryList: { value: Category; label: string }[] = (
  ["image", "video", "3d", "uiux", "render", "tips"] as Category[]
).map((value) => ({ value, label: categoryLabels[value] }));

/** 가격 정책 목록 */
export const pricingList: { value: Pricing; label: string }[] = (
  ["free", "freemium", "paid"] as Pricing[]
).map((value) => ({ value, label: pricingLabels[value] }));
