import AddIcon from "../../../assets/AddIcon";
import Chip from "../Chip";
import CustomButton from "../CustomButton";
import CustomTableCol from "./CustomTableCol";

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

export default function CustomTableFooter() {
  const FooterCols = [
    null,
    <CountDisplay />,
    ...Array.from({ length: 5 }, (_, i: number) => <AddCalculation key={i} />),
    null,
  ];

  const type = "footer";

  return (
    <tr className="flex p-0 m-0">
      {FooterCols.map((col: JSX.Element | null, i: number) =>
        i === 0 || i === FooterCols.length - 1 ? (
          <td
            key={i}
            className={`${
              i == 0 ? "min-w-[3.25rem]" : "min-w-[4rem]"
            } flex items-center justify-center border-b border-slate-300 px-[1rem] py-[0.6rem] m-0`}
          />
        ) : (
          <CustomTableCol key={i} props={{ type, col: col }} />
        )
      )}
    </tr>
  );
}
