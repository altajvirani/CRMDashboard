import AddIcon from "../../../assets/AddIcon";
import Chip from "../Chip";
import CustomButton from "../CustomButton";

const CountDisplay = () => {
  return (
    <div className="h-full flex items-center justify-end">
      <Chip theme={"transparent"} content={"10"} isClickable={false} />
      <span>{`count`}</span>
    </div>
  );
};

const AddCalculation = () => {
  return (
    <div className="w-full h-full flex items-center justify-start mr-[0.4rem]">
      <CustomButton
        theme={"transparent"}
        icon={
          <AddIcon
            styles={"w-[0.9rem] h-[0.9rem] m-auto"}
            theme={"transparent"}
          />
        }
        text={null}
        menuOptions={null}
        handlerParams={null}
        handler={null}
      />
      <input
        type="input"
        placeholder="Add calculation"
        className="border-none outline-none focus:outline-none active:outline-none max-w-[8rem] m-0 px-[0.4rem] py-[0.3rem]"
      />
    </div>
  );
};

export default function CustomTableHeader() {
  return (
    <tr className="flex p-0 m-0">
      <td className="min-w-[3.25rem] min-h-[3.2rem] flex items-center justify-end border-b border-slate-300 px-[1rem] py-[0.6rem] m-0"></td>
      <td className="w-full min-h-[3.2rem] flex items-center justify-end overflow-y-scroll no-scrollbar border-r border-b border-slate-300 px-[1rem] py-[0.6rem] m-0 text-gray-500 font-qanelasmedium whitespace-nowrap">
        <CountDisplay />
      </td>
      <td className="w-full min-h-[3.2rem] flex items-center justify-end overflow-y-scroll no-scrollbar border-r border-b border-slate-300 px-[1rem] py-[0.6rem] m-0 text-gray-500 font-qanelasmedium whitespace-nowrap">
        <AddCalculation />
      </td>
      <td className="w-full min-h-[3.2rem] flex items-center justify-end overflow-y-scroll no-scrollbar border-r border-b border-slate-300 px-[1rem] py-[0.6rem] m-0 text-gray-500 font-qanelasmedium whitespace-nowrap">
        <AddCalculation />
      </td>
      <td className="w-full min-h-[3.2rem] flex items-center justify-end overflow-y-scroll no-scrollbar border-r border-b border-slate-300 px-[1rem] py-[0.6rem] m-0 text-gray-500 font-qanelasmedium whitespace-nowrap">
        <AddCalculation />
      </td>
      <td className="w-full min-h-[3.2rem] flex items-center justify-end overflow-y-scroll no-scrollbar border-r border-b border-slate-300 px-[1rem] py-[0.6rem] m-0 text-gray-500 font-qanelasmedium whitespace-nowrap">
        <AddCalculation />
      </td>
      <td className="w-full min-h-[3.2rem] flex items-center justify-end overflow-y-scroll no-scrollbar border-r border-b border-slate-300 px-[1rem] py-[0.6rem] m-0 text-gray-500 font-qanelasmedium whitespace-nowrap"></td>
      <td className="min-w-[4rem] min-h-[3.2rem] flex items-center justify-end border-b border-slate-300 px-[1rem] py-[0.6rem] m-0" />
    </tr>
  );
}
