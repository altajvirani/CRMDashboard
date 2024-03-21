import { useContext } from "react";
import { TableContext } from "../../context";
import { TableData } from "../../types";
import CustomTableRow from "./CustomTableRow";

export default function CustomTable() {
  const { tableData } = useContext(TableContext) as { tableData: TableData[] };

  return (
    <table className="table-auto xl:table-fixed w-full h-full mb-[15.2rem]">
      <thead>
        <CustomTableRow props={{ rowType: "header" }} />
      </thead>
      <tbody className="w-full p-0">
        {tableData.map((data, index: number) => (
          <CustomTableRow
            key={index}
            props={{
              rowType: "row",
              rowData: data,
            }}
          />
        ))}
        <CustomTableRow props={{ rowType: "footer" }} />
      </tbody>
    </table>
  );
}
