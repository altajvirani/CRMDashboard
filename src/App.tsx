/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import "./App.css";
import SearchIcon from "./assets/SearchIcon";
import MessagesIcon from "./assets/MessagesIcon";
import SettingsIcon from "./assets/SettingsIcon";
import CustomButton from "./components/button/CustomButton";
import { useRef } from "react";
import GridIcon from "./assets/GridIcon";

function App() {
  const searchBarRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full h-full flex text-slate-700">
      <div className="bg-white w-full sm:w-full md:w-[20rem] h-full fixed top-0 flex flex-col px-[0.75rem] py-[0.75rem]">
        <div className="w-full h-full px-[1rem] py-[0.6rem] border border-slate-300 rounded-xl">
          <div>hello</div>
          <div>hi</div>
        </div>
      </div>
      <div className="w-full pl-[0.75rem] md:pl-[20rem] pr-[0.75rem] py-[0.75rem] h-[100vh]">
        <div className="w-full h-full border border-slate-300 rounded-xl ">
          <div className="w-full px-[1.3rem] py-[1rem] flex flex-row items-center justify-between border-b border-slate-300">
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
                    className="w-full bg-transparent border-none outline-none focus-none px-[0.35rem] placeholder-slate-400"
                    placeholder="Search for..."
                  />
                </label>
              </div>
              <CustomButton
                appearance="default"
                icon={<MessagesIcon styles="w-[0.9rem] h-[0.9rem] m-auto" />}
                text={null}
                menuOptions={null}
                handler={null}
                handlerParams={null}
              />
              <CustomButton
                appearance="default"
                icon={<SettingsIcon styles="w-[1.2rem] h-[1.2rem] m-auto" />}
                text={null}
                menuOptions={null}
                handler={null}
                handlerParams={null}
              />
            </div>
          </div>
          <div className="w-full px-[1.3rem] py-[1rem] flex flex-row items-center justify-between border-b border-slate-300">
            <CustomButton
              appearance="default"
              icon={<GridIcon styles="w-[0.8rem] h-[0.8rem] m-auto" />}
              text="All brands"
              menuOptions={null}
              handler={null}
              handlerParams={null}
            />
          </div>
          {/* <div className="w-full h-[0.05rem] bg-slate-300 mb-[0.75rem]" /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
