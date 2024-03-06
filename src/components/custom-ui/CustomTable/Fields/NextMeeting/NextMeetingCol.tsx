import Chip from "../../../Chip";

export default function NextMeetingCol() {
  return (
    <td className="overflow-y-scroll no-scrollbar w-full h-full flex items-center justify-between border-r border-b border-slate-300 px-[1rem] py-[0.6rem] text-slate-700 font-qanelassemibold whitespace-nowrap">
      <Chip theme="success" content="in 30 minutes" isClickable={true} />
    </td>
  );
}
