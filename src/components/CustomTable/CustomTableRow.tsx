/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import NextMeetingCol from "./Fields/NextMeeting/NextMeetingCol";
import CategoriesCol from "./Fields/Categories/CategoriesCol";
import DescriptionCol from "./Fields/Description/DescriptionCol";
import MembersCol from "./Fields/Members/MembersCol";
import TagsCol from "./Fields/Tags/TagsCol";
import BrandCol from "./Fields/Brands/BrandCol";
import CustomTableCol from "./CustomTableCol";
import AddIcon from "../../assets/AddIcon";
import Chip from "../Chip";
import CustomButton from "../CustomButton";
import BrandHeader from "./Fields/Brands/BrandsHeader";
import CategoriesHeader from "./Fields/Categories/CategoriesHeader";
import DescriptionHeader from "./Fields/Description/DescriptionHeader";
import MembersHeader from "./Fields/Members/MembersHeader";
import NextMeetingHeader from "./Fields/NextMeeting/NextMeetingHeader";
import TagsHeader from "./Fields/Tags/TagsHeader";
import { useContext, useEffect, useState } from "react";
import { TableContext } from "../../context";
import { TableData } from "../../types";

export default function CustomTableRow({ props }: { props: any }) {
  const { rowType, rowData }: { rowType: string; rowData: TableData } = props;
  let rowCols;

  const {
    setTableData,
    selectAll,
    setSelectAll,
    selectedRowsIds,
    setSelectedRowsIds,
    rowAction,
    setRowAction,
  } = useContext(TableContext) as {
    setTableData: React.Dispatch<React.SetStateAction<TableData[]>>;
    selectAll: boolean;
    setSelectAll: React.Dispatch<React.SetStateAction<boolean>>;
    selectedRowsIds: number[];
    setSelectedRowsIds: React.Dispatch<React.SetStateAction<number[]>>;
    rowAction: string | null;
    setRowAction: React.Dispatch<React.SetStateAction<string | null>>;
  };

  const [selectCurr, setSelectCurr] = useState<boolean>(false);

  useEffect(() => {
    setSelectCurr(selectAll);
  }, [selectAll]);

  useEffect(() => {
    if (rowData) {
      if (selectCurr)
        setSelectedRowsIds((prevState: number[]) =>
          !prevState.includes(rowData.id)
            ? [...prevState, rowData.id]
            : prevState
        );
      else
        setSelectedRowsIds((prevState: number[]) =>
          prevState.filter((rowId) => rowId !== rowData.id)
        );
    }
  }, [selectCurr]);

  const deleteRow = () => {
    setSelectCurr(false);
    setTableData((prevState: TableData[]) =>
      prevState.filter((row: TableData) => !selectedRowsIds.includes(row.id))
    );
    setSelectedRowsIds([]);
  };

  useEffect(() => {
    if (rowAction) {
      if (rowAction === "delete") deleteRow();
      setRowAction(null);
    }
  }, [rowAction]);

  if (rowType === "header") {
    rowCols = [
      <input
        type="checkbox"
        checked={selectAll}
        onChange={() => setSelectAll((prevState: boolean) => !prevState)}
        className="checkbox checkbox-sm rounded-[0.35rem] outline-none focus:outline-none active:outline-none checked:border-none border-slate-300"
      />,
      <BrandHeader />,
      <DescriptionHeader />,
      <MembersHeader />,
      <CategoriesHeader />,
      <TagsHeader />,
      <NextMeetingHeader />,
      <CustomButton
        theme={"transparent"}
        icon={<AddIcon styles={"w-[0.9rem] h-[0.9rem] m-auto"} theme={null} />}
        text={null}
        menuProps={null}
        handlerParams={null}
        handler={null}
      />,
    ];
  } else if (rowType === "footer") {
    const CountDisplay = () => {
      return (
        <div className="h-full flex items-center justify-end">
          <Chip theme={null} content={"10"} isClickable={false} />
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
            menuProps={null}
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

    rowCols = [
      null,
      <CountDisplay />,
      ...Array.from({ length: 5 }, (_, i: number) => (
        <AddCalculation key={i} />
      )),
      null,
    ];
  } else {
    const {
      // id,
      brandName,
      msgsCount,
      description,
      // members,
      categories,
      tags,
      nextMeetingTime,
    }: TableData = rowData;

    rowCols = [
      <input
        key={rowData.id}
        type="checkbox"
        checked={selectCurr}
        onChange={() => setSelectCurr((prevState: boolean) => !prevState)}
        className="checkbox checkbox-sm rounded-[0.35rem] outline-none focus:outline-none active:outline-none checked:border-none border-slate-300"
      />,
      <BrandCol props={{ brandName, msgsCount }} />,
      <DescriptionCol props={{ description }} />,
      <MembersCol />,
      <CategoriesCol
        props={{
          categories,
        }}
      />,
      <TagsCol
        props={{
          tags,
        }}
      />,
      <NextMeetingCol
        props={{
          nextMeetingTime,
        }}
      />,
      null,
    ];
  }

  return (
    <tr
      className={`flex p-0 m-0 w-full cursor-pointer transition-colors ${
        rowType === "row" &&
        (selectedRowsIds.includes(rowData.id)
          ? "bg-slate-100"
          : "hover:bg-slate-100")
      }`}>
      {rowCols.map((col: JSX.Element | null, i: number) =>
        i === 0 || i === rowCols.length - 1 ? (
          <td
            key={i}
            className={`${
              (i == 0 || i === rowCols.length - 1) && "min-w-[3rem]"
            } flex items-center justify-center border-b border-slate-300 px-[1rem] py-[0.6rem] m-0"`}>
            {col}
          </td>
        ) : (
          <CustomTableCol key={i} props={{ type: rowType, col: col }} />
        )
      )}
    </tr>
  );
}
