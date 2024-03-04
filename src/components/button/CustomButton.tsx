/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { CustomButtonProps } from "../../types";

export default function Button(props: CustomButtonProps) {
  return (
    <button
      className={`${
        props.text !== null
          ? "w-max px-[0.5rem] font-qanelasmedium"
          : "w-[2rem]"
      } h-[2rem] border border-slate-300 rounded-lg shadow-[0rem_0rem_0.5rem_-0.1rem_rgb(98,107,128,0.2)] flex flex-row items-center`}
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
    </button>
  );
}
