/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomTableColProps } from "../../../types";

export default function CustomTableCol({
  props,
}: {
  props: CustomTableColProps[];
}) {
  return (
    <tr className="w-full flex flex-row justify-start border-b border-slate-300 cursor-pointer hover:bg-slate-50">
      {props.map((prop: CustomTableColProps, index: number) => {
        return index === 0 || index === props.length - 1 ? (
          <td
            key={index}
            className={`min-w-[3rem] flex items-center justify-start pl-[1rem] py-[0.6rem]`}>
            {index === 0 ? (
              <input
                type="checkbox"
                className="checkbox checkbox-sm rounded-[0.35rem] checked:border-none  border-slate-300"
              />
            ) : prop.actionButton !== null ? (
              prop.actionButton
            ) : null}
          </td>
        ) : (
          <td
            key={index}
            className={`w-full overflow-y-scroll no-scrollbar flex items-center justify-start border-r border-slate-300 px-[1rem] py-[0.6rem] text-gray-500 font-qanelasmedium`}>
            {prop.isIterable ? (
              prop.contentType === "avatar-with-name" ? (
                <>
                  <div className="w-full flex flex-row justify-start items-center gap-[0.6rem]">
                    {prop.content.map((comps: any) => comps)}
                  </div>
                  {prop.actionButton !== null ? prop.actionButton : null}
                </>
              ) : prop.contentType === "avatars" ? (
                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                  {prop.content.map((comps: any) => comps)}
                </div>
              ) : (
                <div className="max-w-[10rem] flex flex-row justify-between gap-[0.6rem]">
                  {prop.content.map((comps: any) => comps)}
                </div>
              )
            ) : prop.contentType === "text" ? (
              <div
                className={`w-full flex flex-row items-center ${
                  prop.alignment !== null
                    ? prop.alignment === "start"
                      ? "justify-between"
                      : "justify-end gap-[0.7rem]"
                    : "justify-end gap-[0.7rem]"
                } bg-red-100"`}>
                {prop.actionButton !== null &&
                prop.actionButtonPosition === "start"
                  ? prop.actionButton
                  : null}
                <span
                  className={`flex pr-[0.6rem] justify-${
                    prop.alignment !== null ? prop.alignment : "start"
                  }`}>
                  {prop.content}
                </span>
                {prop.actionButton !== null &&
                prop.actionButtonPosition === "end"
                  ? prop.actionButton
                  : null}
              </div>
            ) : prop.actionButton !== null ? (
              <div className="w-full flex flex-row items-center justify-between">
                {prop.actionButton}
              </div>
            ) : null}
          </td>
        );
      })}
    </tr>
  );
}
