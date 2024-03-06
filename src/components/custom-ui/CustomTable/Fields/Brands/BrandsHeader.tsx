import CustomButton from "../../../CustomButton";
import AddIcon from "../../../../../assets/AddIcon";

export default function BrandHeader() {
  return (
    <td className="overflow-y-scroll no-scrollbar w-full h-full flex items-center justify-between border-r border-b border-slate-300 px-[1rem] py-[0.6rem] text-gray-500 font-qanelasregular whitespace-nowrap relative">
      <span>Brands</span>
      <CustomButton
        theme={"transparent"}
        icon={<AddIcon styles={"w-[0.9rem] h-[0.9rem] m-auto"} theme={null} />}
        text={null}
        menuOptions={null}
        handlerParams={null}
        handler={null}
      />
    </td>
  );
}
