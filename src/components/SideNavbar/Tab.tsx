/* eslint-disable @typescript-eslint/no-unused-vars */
import { SideNavbarTabProps } from "../../types";

export default function Tab({ props }: { props: SideNavbarTabProps }) {
  const {
    topBorder,
    isClickable,
    isSelected,
    appearance,
    textSize = "1rem",
    textBold,
    start,
    text,
    end,
  } = props;

  return (
    <>
      {topBorder && (
        <div className="w-full h-0 border-b border-slate-300 my-[0.4rem]" />
      )}
      <div
        className={`
          font-qanelasmedium mx-[0.5rem] px-[0.6rem] py-[0.4rem]
          ${
            isClickable &&
            "transition-all hover:scale-[1.01] active:scale-[0.97]"
          }
          ${
            isClickable &&
            !isSelected &&
            appearance !== "dark" &&
            "hover:bg-slate-100"
          }
          ${
            isClickable &&
            !isSelected &&
            appearance === "ghost" &&
            "hover:bg-stone-100"
          }
          ${isSelected && "bg-slate-200"}
          ${appearance === "dark" && "bg-gray-200"}
          rounded-[0.6rem] flex justify-between items-center cursor-pointer
        `}>
        <div className="flex gap-[0.5rem]">
          {start}
          <span
            className={`
              ${appearance === "ghost" ? "text-stone-500" : ""}
              ${textBold ? "font-qanelasmedium" : "font-qanelasregular"}
              text-[${textSize}]
            `}>
            {text}
          </span>
        </div>
        {end}
      </div>
    </>
  );
}
