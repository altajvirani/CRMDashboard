import Chip from "../../../Chip";

export default function CategoriesCol() {
  return (
    <td className="overflow-y-scroll no-scrollbar w-full h-full flex items-center justify-start border-r border-b border-slate-300 px-[1rem] py-[0.6rem] text-slate-700 font-qanelassemibold whitespace-nowrap gap-[0.4rem]">
      <Chip theme="danger" content={"E-Commerce"} isClickable={true} />
      <Chip theme="warning" content={"B2B"} isClickable={true} />
    </td>
  );
}
