import type { Tool } from "@/data/tools";
import ToolCard from "@/components/ToolCard";

export default function RecentTrack({ tools }: { tools: Tool[] }) {
  return (
    <div className="-mx-6 overflow-x-auto px-6 pb-4 sm:-mx-12 sm:px-12 lg:-mx-20 lg:px-20 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex gap-8">
        {tools.map((tool, i) => (
          <div
            key={tool.slug}
            className="w-[300px] shrink-0 snap-start sm:w-[340px]"
          >
            {/* featured 카드의 grid col-span은 flex 트랙에서 무시되어 폭이 일정함 */}
            <ToolCard tool={tool} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
