import AddIcon from "../../assets/AddIcon";
import Chip from "./Chip";
import CustomButton from "./CustomButton";

export default function SideNavbar() {
  return (
    <div className="bg-white z-10 w-full sm:w-full md:w-[20rem] h-full fixed top-0 flex flex-col gap-[1rem] px-[0.75rem] py-[0.75rem]">
      <div className="w-full h-full flex flex-col justify-between border border-slate-300 rounded-xl py-[1rem]">
        <div className="org-user-tab w-full flex items-center justify-between px-[1rem]">
          <div className="org-avatar flex items-center gap-[0.6rem]  cursor-pointer">
            <div className="avatar h-full transition-transform hover:scale-105 active:scale-95 ">
              <div className="w-10 rounded-xl">
                <img src="https://cdn.dribbble.com/userupload/5116624/file/original-cb12940e1e88b404209be28630fbafbe.jpg?resize=752x" />
              </div>
            </div>
            <div className="h-full flex flex-col">
              <span className="font-qanelasregular text-[0.9rem] leading-5">
                INC
              </span>
              <span className="font-qanelassemibold text-[1.2rem] leading-5">
                InnovateHub
              </span>
            </div>
          </div>
          <div className="user-avatar avatar flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer">
            <div className="w-9 rounded-3xl">
              <img src="https://cdn.dribbble.com/users/9567364/avatars/normal/29e1e95ca64e12b312ab51d7cd950627.png?1673438081" />
            </div>
          </div>
        </div>

        <div className="teams-tab mx-[0.5rem] border border-slate-300 rounded-2xl font-qanelasmedium text-stone-600 mt-[0.6rem] shadow-[0rem_0rem_0.6rem_-0.25rem_rgba(0,0,0,0.2)] pt-[0.5rem]">
          <div className="mx-[0.5rem] px-[0.7rem] py-[0.5rem] hover:bg-gray-200 rounded-[0.6rem] transition-transform  hover:scale-[1.01] active:scale-[0.97] cursor-pointer">
            Design Team
          </div>
          <div className="mx-[0.5rem] px-[0.7rem] py-[0.5rem] hover:bg-gray-200 rounded-[0.6rem] transition-transform  hover:scale-[1.01] active:scale-[0.97] cursor-pointer">
            Marketing Team
          </div>
          <div className="mx-[0.5rem] px-[0.7rem] py-[0.5rem] hover:bg-gray-200 rounded-[0.6rem] transition-transform  hover:scale-[1.01] active:scale-[0.97] cursor-pointer">
            Development Team
          </div>
          <div className="create-team-option mt-[0.5rem] px-[0.7rem] py-[0.5rem] border-t border-slate-300">
            <CustomButton
              theme="transparent"
              icon={<AddIcon styles="w-[1rem] h-[1rem] m-auto" theme="ghost" />}
              text="Create a team"
              menuOptions={null}
              handlerParams={null}
              handler={null}
            />
          </div>
        </div>

        <div className="folders-tab flex flex-col gap-[0.6rem] items-start mx-[1rem] text-stone-600 font-qanelasmedium">
          <div className="w-full px-[0.6rem] folders-option flex items-center justify-between">
            <span>FOLDERS</span>
            <CustomButton
              theme="transparent"
              icon={
                <AddIcon
                  styles={"w-[0.9rem] h-[0.9rem] m-auto"}
                  theme="transparent"
                />
              }
              text={null}
              menuOptions={null}
              handlerParams={null}
              handler={null}
            />
          </div>
          <div className="w-full folders flex flex-col gap-[0.2rem]">
            <div className="w-full px-[0.8rem] py-[0.6rem] bg-gray-100 hover:bg-gray-100 rounded-xl cursor-pointer">
              <span>Products</span>
            </div>
            <div className="w-full px-[0.8rem] py-[0.6rem] hover:bg-gray-100 rounded-xl cursor-pointer">
              <span>Sales</span>
            </div>
            <div className="w-full px-[0.8rem] py-[0.6rem] hover:bg-gray-100 rounded-xl cursor-pointer">
              <span>Design</span>
            </div>
            <div className="w-full px-[0.8rem] py-[0.6rem] hover:bg-gray-100 rounded-xl cursor-pointer">
              <span>Office</span>
            </div>
            <div className="w-full px-[0.8rem] py-[0.6rem] hover:bg-gray-100 rounded-xl cursor-pointer">
              <span>Legal</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[0.2rem] items-start mx-[1rem] text-stone-600 font-qanelasmedium">
          <div className="w-full px-[0.8rem] py-[0.6rem] rounded-xl flex items-center justify-between hover:bg-gray-100 cursor-pointer">
            <span>Invite teammates</span>
          </div>
          <div className="w-full px-[0.8rem] py-[0.6rem] rounded-xl flex items-center justify-between hover:bg-gray-100 cursor-pointer">
            <span>Help and first steps</span>
            <Chip theme="ghost" text={"0/6"} />
          </div>
          <div className="w-full px-[0.8rem] py-[0.6rem] rounded-xl flex items-center justify-between hover:bg-gray-100 cursor-pointer">
            <span>Invite teammates</span>
          </div>
        </div>
      </div>
    </div>
  );
}
