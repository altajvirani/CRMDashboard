import CustomButton from "../../../CustomButton";
import MessagesIcon from "../../../../../assets/MessagesIcon";

export default function BrandCol() {
  return (
    <td className="overflow-y-scroll no-scrollbar w-full h-full flex items-center justify-between border-r border-b border-slate-300 px-[1rem] py-[0.6rem] text-slate-700 font-qanelassemibold whitespace-nowrap relative">
      <div className="flex items-center gap-[0.6rem]">
        <div className="avatar">
          <div className="w-8 rounded-lg">
            <img src="https://cdn.dribbble.com/userupload/8785643/file/original-5075bee443a2cc799e3867cc744f7037.jpg?resize=752x" />
          </div>
        </div>
        <span>Wix</span>
      </div>
      <div className="absolute bg-white h-full flex items-center justify-center right-[0.6rem]">
        <CustomButton
          theme="transparent"
          icon={
            <MessagesIcon
              styles={"w-[0.9rem] h-[0.9rem] m-auto"}
              theme="ghost"
            />
          }
          text="2"
          menuOptions={null}
          handlerParams={null}
          handler={null}
        />
      </div>
    </td>
  );
}
