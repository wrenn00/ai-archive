import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CategoryNav, { type CategoryNavItem } from "@/components/CategoryNav";
import RecentTrack from "@/components/RecentTrack";
import EditorsPicks from "@/components/EditorsPicks";
import ArchiveStats from "@/components/ArchiveStats";
import AboutCTA from "@/components/AboutCTA";
import Marquee from "@/components/Marquee";
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

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-32 px-6 py-24 sm:px-12">
        {/* 2. 카테고리 내비 */}
        <section id="archive">
          <Reveal>
            <SectionHeading
              label="Browse"
              title="카테고리"
              aside="분야별로 탐색하세요. 마우스를 올리면 미리보기가 나타납니다."
              className="mb-12"
            />
          </Reveal>
          <CategoryNav items={categoryItems} />
        </section>

        {/* 3. 최신 추가 */}
        <section id="recent">
          <Reveal>
            <SectionHeading
              label="Recently archived"
              title="최신 추가"
              aside="가장 최근에 아카이브에 더해진 도구들."
              className="mb-12"
            />
          </Reveal>
          <RecentTrack tools={recent} />
        </section>

        {/* 4. 에디터스 픽 */}
        <section id="showcase">
          <Reveal>
            <SectionHeading
              label="Editor's picks"
              title="에디터스 픽"
              aside="지금 특히 주목할 만한 세 가지."
              className="mb-12"
            />
          </Reveal>
          <EditorsPicks tools={featured} />
        </section>

        {/* 5. 아카이브 통계 */}
        <section id="stats">
          <Reveal>
            <SectionHeading
              label="Numbers"
              title="아카이브 현황"
              aside="매주 업데이트되며 꾸준히 늘어납니다."
              className="mb-12"
            />
          </Reveal>
          <ArchiveStats total={all.length} categories={categoryList.length} />
        </section>

        {/* 마퀴 포인트 (full-bleed) */}
        <div className="-mx-6 sm:-mx-12">
          <Marquee />
        </div>

        {/* 6. About + CTA */}
        <section id="about">
          <AboutCTA />
        </section>
      </div>
    </>
  );
}
