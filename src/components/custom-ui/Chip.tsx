import { ChipProps } from "../../types";

export default function Chip(props: ChipProps) {
  return (
    <>
      <div
        className={`${
          props.theme !== "null"
            ? props.theme === "success"
              ? "bg-green-100 border border-green-400 text-green-700"
              : props.theme === "warning"
              ? "bg-orange-100 border border-orange-400 text-orange-700"
              : props.theme === "info"
              ? "bg-blue-100 border border-blue-400 text-blue-700"
              : props.theme === "danger"
              ? "bg-red-100 border border-red-400 text-red-700"
              : props.theme === "light"
              ? "bg-white border border-slate-400 text-slate-700"
              : props.theme === "dark"
              ? "bg-slate-700 text-white"
              : props.theme === "ghost"
              ? "bg-gray-200 border border-gray-400 text-gray-500"
              : ""
            : ""
        } px-[0.4rem] min-w-max rounded-md text-[0.9rem] font-qanelasmedium flex flex-row items-center justify-center ${
          props.isClickable
            ? "transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            : ""
        }`}>
        {props.content}
      </div>
    </>
  );
}
