/* eslint-disable @typescript-eslint/no-unused-vars */

import { SideNavbarTabProps } from "../../../types";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Tab({ props }: { props: SideNavbarTabProps }) {
  return (
    <>
      {props.topBorder ? (
        <div className="w-full h-0 border-b border-slate-300 my-[0.4rem]" />
      ) : null}
      <div
        className={`font-qanelasmedium mx-[0.5rem] px-[0.6rem] py-[0.4rem] ${
          props.isClickable &&
          "transition-transform hover:scale-[1.01] active:scale-[0.97] " +
            (props.appearance !== null && props.appearance === "ghost"
              ? "hover:bg-stone-100 "
              : props.appearance !== "dark"
              ? "hover:bg-slate-100 "
              : "")
        } ${props.textSize !== null ? props.textSize : "text[1rem]"} ${
          props.isSelected && "bg-slate-200"
        } ${
          props.appearance === "dark" && "bg-gray-200"
        } rounded-[0.6rem] flex justify-between items-center  cursor-pointer`}>
        <div className="flex gap-[0.5rem]">
          {props.start !== null ? props.start : null}
          <span
            className={`${
              props.appearance === "ghost" ? "text-stone-500" : ""
            } ${
              props.textBold ? " font-qanelasmedium " : " font-qanelasregular "
            } text-[${props.textSize}]`}>
            {props.text}
          </span>
        </div>
        {props.end !== null ? props.end : null}
      </div>
    </>
  );
}
