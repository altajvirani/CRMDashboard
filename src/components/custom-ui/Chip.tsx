import { ChipProps } from "../../types";

export default function Chip(props: ChipProps) {
  const { theme, isClickable, content } = props;

  const themeClass = () => {
    return theme !== null
      ? theme === "success"
        ? "bg-green-100 border border-green-400 text-green-700"
        : theme === "info"
        ? "bg-blue-100 border border-blue-400 text-blue-700"
        : theme === "warning"
        ? "bg-orange-100 border border-orange-400 text-orange-700"
        : theme === "danger"
        ? "bg-red-100 border border-red-400 text-red-700"
        : theme === "light"
        ? "bg-white border border-slate-400 text-slate-700"
        : theme === "dark"
        ? "bg-slate-700 text-white"
        : theme === "ghost"
        ? "bg-gray-200 border border-gray-400 text-gray-500"
        : `bg-${theme}-100 border border-${theme}-400 text-${theme}-700`
      : "";
  };

  return (
    <>
      <div
        className={`${themeClass()} px-[0.4rem] min-w-max rounded-md text-[0.9rem] font-qanelasmedium flex flex-row items-center justify-center ${
          isClickable
            ? "transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            : ""
        }`}>
        {content}
      </div>
    </>
  );
}
