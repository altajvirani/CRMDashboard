/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import "./App.css";
import SearchIcon from "./assets/SearchIcon";
import MessagesIcon from "./assets/MessagesIcon";
import SettingsIcon from "./assets/SettingsIcon";
import CustomButton from "./components/CustomButton";
import { useRef } from "react";
import GridIcon from "./assets/GridIcon";
import SortIcon from "./assets/SortIcon";
import FilterIcon from "./assets/FilterIcon";
import AddIcon from "./assets/AddIcon";
import ImportExportIcon from "./assets/ImportExportIcon";
import Chip from "./components/Chip";
import ArchiveIcon from "./assets/ArchiveIcon";
import DeleteIcon from "./assets/DeleteIcon";
import CancelIcon from "./assets/CancelIcon";

function App() {
  const searchBarRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full h-full flex text-slate-700">
      <div className="bg-white z-10 w-full sm:w-full md:w-[20rem] h-full fixed top-0 flex flex-col px-[0.75rem] py-[0.75rem] ">
        <div className="w-full h-full px-[1rem] py-[0.6rem] border border-slate-300 rounded-xl">
          <div>hello</div>
          <div>hi</div>
        </div>
      </div>
      <div className="w-full pl-[0.75rem] md:pl-[20rem] pr-[0.75rem] py-[0.75rem] h-[100vh]">
        <div className="w-full h-full border border-slate-300 rounded-xl relative">
          <div className="w-full px-[1.3rem] py-[1rem] flex flex-row items-center justify-between gap-[0.6rem] border-b border-slate-300 ">
            <span className="font-qanelassemibold text-[1.2rem] h-full flex align-center">
              Products
            </span>
            <div className="flex flex-row gap-[0.6rem]">
              <div>
                <label className="w-[14rem] h-[2rem] outline-none border border-slate-300 rounded-[0.6rem] shadow-[0rem_0rem_0.5rem_-0.1rem_rgb(98,107,128,0.2)] flex items-center px-[0.5rem] py-[0.7rem]">
                  <SearchIcon styles="w-[0.9rem] h-[0.9rem]" />
                  <input
                    ref={searchBarRef}
                    type="text"
                    className="w-full bg-transparent border-none outline-none focus-none px-[0.35rem] placeholder-slate-400 font-qanelaslight"
                    placeholder="Search for..."
                  />
                </label>
              </div>
              <CustomButton
                theme={null}
                icon={<MessagesIcon styles="w-[0.9rem] h-[0.9rem] m-auto" />}
                text={null}
                menuOptions={null}
                handler={null}
                handlerParams={null}
              />
              <CustomButton
                theme={null}
                icon={<SettingsIcon styles="w-[1.2rem] h-[1.2rem] m-auto" />}
                text={null}
                menuOptions={null}
                handler={null}
                handlerParams={null}
              />
            </div>
          </div>
          <div className="w-full px-[1.3rem] py-[1rem] flex flex-col lg:flex-row gap-[0.6rem] items-center justify-between border-b border-slate-300">
            <div className="w-full lg:w-auto flex flex-row gap-[0.6rem]">
              <CustomButton
                theme={null}
                icon={<GridIcon styles="w-[0.8rem] h-[0.8rem] m-auto" />}
                text="All brands"
                menuOptions={null}
                handler={null}
                handlerParams={null}
              />
              <CustomButton
                theme={null}
                icon={null}
                text="Desk"
                menuOptions={null}
                handler={null}
                handlerParams={null}
              />
              <CustomButton
                theme={null}
                icon={null}
                text="Tags"
                menuOptions={null}
                handler={null}
                handlerParams={null}
              />
              <CustomButton
                theme="ghost"
                icon={<SortIcon styles="w-[0.85rem] h-[0.85rem] m-auto" />}
                text="Sort"
                menuOptions={null}
                handler={null}
                handlerParams={null}
              />
              <CustomButton
                theme="ghost"
                icon={<FilterIcon styles="w-[0.95rem] h-[0.95rem] m-auto" />}
                text="Filter"
                menuOptions={null}
                handler={null}
                handlerParams={null}
              />
            </div>
            <div className="w-full lg:w-auto flex flex-row gap-[0.6rem]">
              <CustomButton
                theme={null}
                icon={
                  <AddIcon
                    styles="w-[0.9rem] h-[0.9rem] m-auto"
                    theme="primary"
                  />
                }
                text="Meeting"
                menuOptions={null}
                handler={null}
                handlerParams={null}
              />
              <CustomButton
                theme={null}
                icon={
                  <ImportExportIcon styles="w-[1rem] h-[1rem] my-[0.2rem]" />
                }
                text="Import/Export"
                menuOptions={null}
                handler={null}
                handlerParams={null}
              />
            </div>
          </div>
          <div className="absolute bottom-[0.8rem] left-0 right-0 m-auto w-max h-max border border-slate-300 rounded-xl px-[0.8rem] py-[0.8rem] shadow-[0rem_0rem_1rem_-0.2rem_rgb(98,107,128,0.3)] flex flex-row items-center gap-[1.3rem]">
            <div className="flex flex-row items-center justify-center  gap-[0.35rem]">
              <Chip theme="dark" text="3" />
              <span>selected</span>
            </div>
            <div className="flex flex-row items-center justify-center gap-[0.6rem]">
              <CustomButton
                theme={null}
                icon={
                  <ArchiveIcon styles="w-[0.9rem] h-[0.9rem] ml-0 my-auto" />
                }
                text={"Archive"}
                menuOptions={null}
                handlerParams={null}
                handler={null}
              />
              <CustomButton
                theme="danger"
                icon={
                  <DeleteIcon styles="w-[0.9rem] h-[0.9rem] ml-0 my-auto" />
                }
                text={"Delete"}
                menuOptions={null}
                handlerParams={null}
                handler={null}
              />
              <CustomButton
                theme={null}
                icon={null}
                text={"More"}
                menuOptions={null}
                handlerParams={null}
                handler={null}
              />
            </div>
            <CustomButton
              theme={"transparent"}
              icon={<CancelIcon styles="w-[0.7rem] h-[0.7rem] m-auto" />}
              text={null}
              menuOptions={null}
              handlerParams={null}
              handler={null}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
