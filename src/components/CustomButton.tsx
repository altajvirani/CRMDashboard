/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import DropdownIcon from "../assets/DropdownIcon";
import { CustomButtonProps } from "../types";

export default function CustomButton(props: CustomButtonProps) {
  return (
    <>
      <button
        className={`${
          props.text !== null
            ? "min-w-max px-[0.5rem] font-qanelasmedium"
            : "min-w-[2rem]"
        } ${
          props.theme === "danger"
            ? "text-red-900 border border-slate-300 shadow-[0rem_0rem_0.5rem_-0.1rem_rgb(98,107,128,0.2)]"
            : props.theme === "dark"
            ? "bg-slate-700 text-white"
            : props.theme === "ghost"
            ? "bg-gray-50 text-gray-500 border border-dashed border-gray-300"
            : props.theme === "transparent"
            ? "bg-transparent hover:bg-gray-200 text-stone-600"
            : "border border-slate-300 shadow-[0rem_0rem_0.5rem_-0.1rem_rgb(98,107,128,0.2)]"
        } min-h-[2rem] outline-none rounded-lg flex flex-row gap-[0.3rem] items-center transition-all hover:scale-105 active:scale-95`}
        onClick={() => {
          props.handler !== null
            ? props.handlerParams !== null
              ? props.handler(props.handlerParams)
              : props.handler()
            : null;
        }}>
        {props.icon !== null && props.text !== null ? (
          <span className="flex flex-grow gap-[0.3rem]">
            {props.icon}
            {props.text}
          </span>
        ) : props.icon !== null ? (
          props.icon
        ) : props.text !== null ? (
          <span>{props.text}</span>
        ) : null}
        {props.menuOptions && <DropdownIcon styles={"w-[0.7rem] h-[0.7rem]"} />}
      </button>
    </>
  );
}
