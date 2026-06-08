import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CategoryNav, { type CategoryNavItem } from "@/components/CategoryNav";
import RecentTrack from "@/components/RecentTrack";
import EditorsPicks from "@/components/EditorsPicks";
import ArchiveStats from "@/components/ArchiveStats";
import AboutCTA from "@/components/AboutCTA";
import Marquee from "@/components/Marquee";
import TextLink from "@/components/TextLink";
import Reveal from "@/components/Reveal";
import { getAllTools, getFeatured, getCategoryCounts } from "@/lib/tools";
import { categoryList } from "@/lib/labels";

export default function Home() {
  const all = getAllTools();
  const counts = getCategoryCounts();

  const categoryItems: CategoryNavItem[] = categoryList.map(
    ({ value, label }) => ({
      value,
      label,
      count: counts[value] ?? 0,
      thumbnail:
        all.find((t) => t.categories.includes(value))?.thumbnail ??
        all[0].thumbnail,
    }),
  );

  const recent = all.slice(0, 8);
  const featured = getFeatured().slice(0, 3);

  return (
    <>
      <Hero />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-28 px-6 py-24 sm:gap-40 sm:px-12 lg:gap-[180px] lg:px-20 lg:py-32">
        {/* 카테고리 내비 */}
        <section id="archive">
          <Reveal>
            <SectionHeading
              en="Categories"
              ko="분야별로 둘러보기"
              className="mb-14"
            />
          </Reveal>
          <CategoryNav items={categoryItems} />
        </section>

        {/* 최신 추가 */}
        <section id="recent">
          <Reveal>
            <SectionHeading
              en="Recently Archived"
              ko="가장 최근에 더해진 도구들"
              action={<TextLink href="/archive">전체 보기</TextLink>}
              className="mb-14"
            />
          </Reveal>
          <RecentTrack tools={recent} />
        </section>

        {/* 에디터스 픽 */}
        <section id="featured">
          <Reveal>
            <SectionHeading
              en="Featured"
              ko="이번 주 추천 도구"
              className="mb-14"
            />
          </Reveal>
          <EditorsPicks tools={featured} />
        </section>

        {/* 아카이브 통계 */}
        <section id="stats">
          <Reveal>
            <SectionHeading
              en="Numbers"
              ko="아카이브 현황"
              className="mb-14"
            />
          </Reveal>
          <ArchiveStats total={all.length} categories={categoryList.length} />
        </section>

        {/* 마퀴 (full-bleed) */}
        <div className="-mx-6 sm:-mx-12 lg:-mx-20">
          <Marquee />
        </div>

        {/* About + CTA */}
        <section id="about">
          <AboutCTA />
        </section>
      </div>
    </>
  );
}
