/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";
import DropdownIcon from "../assets/DropdownIcon";
import { CustomButtonProps, MenuOptionsProps } from "../types";

export default function CustomButton(props: CustomButtonProps) {
  const { theme, icon, text, menuProps, handlerParams, handler } = props;

  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const getMenuPosClass = () => {
    let menuPostClass = "";
    if (menuProps && menuProps.position) {
      const menuPosArr = menuProps.position.split("-");
      menuPostClass += menuPosArr.includes("top")
        ? "bottom-[2.5rem] "
        : "top-[2.5rem] ";
      menuPostClass += menuPosArr.includes("end")
        ? "right-0"
        : menuPosArr.includes("center")
        ? "left-[50%] right-[50%] transform -translate-x-[50%]"
        : "left-0";
    }
    return menuPostClass;
  };

  return (
    <div className="flex flex-row gap-[0.4rem] relative">
      <button
        className={`${
          text !== null
            ? "min-w-max px-[0.5rem] font-qanelasmedium"
            : "min-w-[2rem]"
        } ${
          theme === "danger"
            ? "text-red-900 border border-slate-300 shadow-[0rem_0rem_0.5rem_-0.1rem_rgb(98,107,128,0.2)]"
            : theme === "dark"
            ? "bg-slate-700 text-white"
            : theme === "ghost"
            ? "bg-gray-50 text-gray-500 border border-dashed border-gray-300"
            : theme === "transparent"
            ? "bg-transparent hover:bg-gray-200 text-stone-600"
            : "border border-slate-300 shadow-[0rem_0rem_0.5rem_-0.1rem_rgb(98,107,128,0.2)]"
        } min-h-[2rem] outline-none rounded-lg flex flex-row gap-[0.3rem] items-center transition-all hover:scale-105 active:scale-95`}
        onClick={() => {
          if (handler !== null) {
            if (handlerParams !== null) handler(handlerParams);
            else handler();
          }
          if (menuProps) setToggleMenu((prevState: boolean) => !prevState);
        }}
        onBlur={() => setToggleMenu(false)}>
        {icon !== null && text !== null ? (
          <span className="flex flex-grow gap-[0.3rem]">
            {icon}
            {text}
          </span>
        ) : icon !== null ? (
          icon
        ) : text !== null ? (
          <span>{text}</span>
        ) : null}
        {menuProps && (
          <DropdownIcon
            styles={`w-[0.7rem] h-[0.7rem] ${toggleMenu && "rotate-180"}`}
          />
        )}
      </button>
      {menuProps && toggleMenu && (
        <div
          className={`w-[14rem] absolute ${getMenuPosClass()} bg-white rounded-lg border border-slate-300 shadow-[0rem_0rem_0.5rem_-0.1rem_rgb(98,107,128,0.2)] px-[0.6rem] py-[0.4rem] z-10 transition-all hover:scale-105`}>
          {menuProps.menuOptions &&
            menuProps.menuOptions.map((menuOption: MenuOptionsProps) => (
              <div
                onClick={() => menuOption.handler!(menuOption.handlerParams)}>
                {menuOption.icon}
                {menuOption.text}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
