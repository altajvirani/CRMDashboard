import Chip from "../../../Chip";

export default function TagsCol() {
  return (
    <td className="overflow-y-scroll no-scrollbar w-full h-full flex items-center justify-start border-r border-b border-slate-300 px-[1rem] py-[0.6rem] text-slate-700 font-qanelassemibold whitespace-nowrap gap-[0.4rem]">
      <Chip theme="ghost" content="#DigitalTransformation" isClickable={true} />
      <Chip theme="ghost" content="#OnlineShopping" isClickable={true} />
      <Chip theme="ghost" content="#BuySellOnline" isClickable={true} />{" "}
    </td>
  );
}
