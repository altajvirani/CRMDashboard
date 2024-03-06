/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import AddIcon from "../../../assets/AddIcon";
import BugleIcon from "../../../assets/BugleIcon";
import CodeIcon from "../../../assets/CodeIcon";
import FolderIcon from "../../../assets/FolderIcon";
import HelpIcon from "../../../assets/HelpIcon";
import InviteIcon from "../../../assets/InviteIcon";
import KeyIcon from "../../../assets/KeyIcon";
import PenIcon from "../../../assets/PenIcon";
import Chip from "../Chip";
import CustomButton from "../CustomButton";
import Header from "./Header";
import Section from "./Section";
export default function SideNavbar() {
  return (
    <div className="bg-white z-10 w-full sm:w-full md:w-[20rem] h-full fixed top-0 flex flex-col gap-[1rem] px-[0.75rem] py-[0.75rem]">
      <div className="w-full h-full flex flex-col border border-slate-300 rounded-xl relative">
        <Header />
        <div className="mt-[4.5rem] flex flex-col gap-[0.4rem] p-0">
          <Section
            props={{
              type: "card",
              tabGap: "0.2rem",
              tabs: [
                {
                  isClickable: true,
                  isSelected: false,
                  appearance: "default",
                  topBorder: false,
                  start: <PenIcon styles="w-[1rem] h-[1rem] m-auto" />,
                  text: "Design team",
                  textSize: "null",
                  textBold: true,
                  end: (
                    <Chip
                      theme={"ghost"}
                      content={
                        <>
                          <KeyIcon styles="w-[0.9rem] h-[0.9rem]" />
                          {`+1`}
                        </>
                      }
                      isClickable={false}
                    />
                  ),
                },
                {
                  isClickable: true,
                  isSelected: false,
                  appearance: "default",
                  topBorder: false,
                  start: <BugleIcon styles="w-[1rem] h-[1rem] m-auto" />,
                  text: "Marketing team",
                  textSize: "null",
                  textBold: true,
                  end: (
                    <Chip
                      theme={"ghost"}
                      content={
                        <>
                          <KeyIcon styles="w-[0.9rem] h-[0.9rem]" />
                          {"+2"}
                        </>
                      }
                      isClickable={false}
                    />
                  ),
                },
                {
                  isClickable: true,
                  isSelected: false,
                  appearance: "default",
                  topBorder: false,
                  start: <CodeIcon styles="w-[1rem] h-[1rem] m-auto" />,
                  text: "Development team",
                  textSize: "null",
                  textBold: true,
                  end: (
                    <Chip
                      theme={"ghost"}
                      content={
                        <>
                          <KeyIcon styles="w-[0.9rem] h-[0.9rem]" />
                          {"+3"}
                        </>
                      }
                      isClickable={false}
                    />
                  ),
                },
                {
                  isClickable: true,
                  isSelected: false,
                  appearance: "ghost",
                  topBorder: true,
                  start: (
                    <AddIcon styles="w-[1rem] h-[1rem] m-auto" theme="ghost" />
                  ),
                  text: "Create a team",
                  textSize: null,
                  textBold: true,
                  end: null,
                },
              ],
            }}
          />

          <Section
            props={{
              type: "default",
              tabGap: "0.4rem",
              tabs: [
                {
                  isClickable: false,
                  isSelected: false,
                  appearance: "ghost",
                  topBorder: false,
                  start: null,
                  text: "FOLDERS",
                  textSize: "text-[0.85rem]",
                  textBold: false,
                  end: (
                    <CustomButton
                      theme="transparent"
                      icon={
                        <AddIcon
                          styles={"w-[0.8rem] h-[0.8rem] m-auto"}
                          theme="transparent"
                        />
                      }
                      text={null}
                      menuOptions={null}
                      handlerParams={null}
                      handler={null}
                    />
                  ),
                },
                {
                  isClickable: true,
                  isSelected: true,
                  appearance: "default",
                  topBorder: false,
                  start: <FolderIcon styles="w-[1rem] h-[1rem] m-auto" />,
                  text: "Products",
                  textSize: null,
                  textBold: true,
                  end: null,
                },
                {
                  isClickable: true,
                  isSelected: false,
                  appearance: "default",
                  topBorder: false,
                  start: <FolderIcon styles="w-[1rem] h-[1rem] m-auto" />,
                  text: "Sales",
                  textSize: null,
                  textBold: true,
                  end: null,
                },
                {
                  isClickable: true,
                  isSelected: false,
                  appearance: "default",
                  topBorder: false,
                  start: <FolderIcon styles="w-[1rem] h-[1rem] m-auto" />,
                  text: "Design",
                  textSize: null,
                  textBold: true,
                  end: null,
                },
              ],
            }}
          />
        </div>
        <div className="absolute w-full bg-white z-10 bottom-0 pb-[0.6rem] rounded-b-xl ">
          <Section
            props={{
              type: "default",
              tabGap: "0.4rem",
              tabs: [
                {
                  isClickable: true,
                  isSelected: false,
                  appearance: "default",
                  topBorder: false,

                  start: <InviteIcon styles="w-[1.2rem] h-[1.2rem] m-auto" />,
                  text: "Invite teammates",
                  textSize: null,
                  textBold: true,
                  end: null,
                },
                {
                  isClickable: true,
                  isSelected: false,
                  appearance: "default",
                  topBorder: false,
                  start: (
                    <HelpIcon styles="w-[1.2rem] h-[1.2rem] m-auto ml-[-0.1rem]" />
                  ),
                  text: "Help & first steps",
                  textSize: null,
                  textBold: true,
                  end: <Chip theme="ghost" content="0/6" isClickable={false} />,
                },
                {
                  isClickable: true,
                  isSelected: false,
                  appearance: "dark",
                  topBorder: false,
                  start: <Chip theme="light" content="7" isClickable={false} />,
                  text: "days left on trial",
                  textSize: null,
                  textBold: true,
                  end: (
                    <Chip
                      theme="dark"
                      content="Add billing"
                      isClickable={false}
                    />
                  ),
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}
