import type { Metadata } from "next";
import { getAllTools } from "@/lib/tools";
import SectionHeading from "@/components/SectionHeading";
import CompareClient from "@/components/CompareClient";

export const metadata: Metadata = {
  title: "비교 — ARCHIVE/AI",
  description: "AI 디자인 툴을 나란히 놓고 분야·가격·강점·용도를 비교하세요.",
};

export default function ComparePage() {
  const tools = getAllTools();

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-12">
      <SectionHeading
        en="Compare"
        ko="툴을 나란히 비교하기"
        className="mb-12"
      />
      <CompareClient tools={tools} />
    </main>
  );
}
