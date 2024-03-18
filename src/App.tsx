/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import "./App.css";
import SearchIcon from "./assets/SearchIcon";
import MessagesIcon from "./assets/MessagesIcon";
import SettingsIcon from "./assets/SettingsIcon";
import CustomButton from "./components/CustomButton";
import { useRef, useState } from "react";
import GridIcon from "./assets/GridIcon";
import SortIcon from "./assets/SortIcon";
import FilterIcon from "./assets/FilterIcon";
import AddIcon from "./assets/AddIcon";
import ImportExportIcon from "./assets/ImportExportIcon";
import CustomTable from "./components/CustomTable/CustomTable";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import RowOptions from "./components/RowOptions";
import { TableContext } from "./context";
import { RowData } from "./types";

function App() {
  const [toggleNavbar, setToggleNavbar] = useState<boolean>(false);

  const searchBarRef = useRef<HTMLInputElement>(null);

  const [rowsData, setRowsData] = useState<RowData[]>([
    ...Array.from({ length: 14 }, (_, id) => {
      return {
        id,
        brandName: "Wix",
        msgsCount: 3,
        description: "Design a personalized fitness...",
        members: [1, 2, 3, 4],
        categories: ["E-Commerce", "B2B"],
        tags: ["DigitalTransformation", "OnlineShopping", "BuySellOnline"],
        nextMeetingTime: new Date().getTime() + 1000 * 60 * 60 * 24 * 8,
      } as RowData;
    }),
  ]);

  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [selectedRowsIds, setSelectedRowsIds] = useState<number[]>([]);
  const [rowAction, setRowAction] = useState<string | null>(null);
  const [showRowOptions, setShowRowOptions] = useState<boolean>(false);

  return (
    <div className="w-full h-full flex text-slate-700">
      <SideNavbar props={{ toggleNavbar, setToggleNavbar }} />
      <div
        className={`w-full ${
          toggleNavbar ? "pl-[0.75rem] md:pl-[20rem]" : "pl-[5.2rem]"
        } pr-[0.75rem] py-[0.75rem] h-[100dvh] overflow-hidden`}>
        <div className="w-full h-full relative overflow-hidden border border-slate-300 rounded-xl">
          <div className="w-full px-[1.3rem] py-[1rem] flex items-center justify-between gap-[0.6rem] border-b border-slate-300">
            <span className="font-qanelassemibold text-[1.2rem] h-full flex align-center">
              Products
            </span>
            <div className="flex gap-[0.6rem]">
              <div>
                <label className="w-[14rem] h-[2rem] outline-none border border-slate-300 rounded-[0.6rem] shadow-[0rem_0rem_0.5rem_-0.1rem_rgb(98,107,128,0.2)] flex items-center px-[0.5rem] py-[0.7rem]">
                  <SearchIcon styles="w-[0.9rem] h-[0.9rem]" />
                  <input
                    ref={searchBarRef}
                    type="text"
                    className="w-full bg-transparent border-none outline-none focus-none px-[0.35rem] placeholder-slate-400 font-qanelasregular"
                    placeholder="Search for..."
                  />
                </label>
              </div>
              <CustomButton
                theme={null}
                icon={
                  <MessagesIcon
                    styles="w-[0.9rem] h-[0.9rem] m-auto"
                    theme="primary"
                  />
                }
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
            <div className="w-full lg:w-auto flex gap-[0.6rem]">
              <CustomButton
                theme={null}
                icon={<GridIcon styles="w-[0.8rem] h-[0.8rem] m-auto" />}
                text="All brands"
                menuOptions={[]}
                handler={null}
                handlerParams={null}
              />
              <CustomButton
                theme={null}
                icon={null}
                text="Desk"
                menuOptions={[]}
                handler={null}
                handlerParams={null}
              />
              <CustomButton
                theme={null}
                icon={null}
                text="Tags"
                menuOptions={[]}
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
            <div className="w-full lg:w-auto flex gap-[0.6rem]">
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

          <TableContext.Provider
            value={{
              rowsData,
              setRowsData,
              selectAll,
              setSelectAll,
              selectedRowsIds,
              setSelectedRowsIds,
              showRowOptions,
              setShowRowOptions,
              rowAction,
              setRowAction,
            }}>
            <div className="h-full overflow-auto">
              <CustomTable />
            </div>
            <RowOptions />
          </TableContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
