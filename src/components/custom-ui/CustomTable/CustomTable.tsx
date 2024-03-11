/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import CustomTableRow from "./CustomTableRow";

export default function CustomTable() {
  const rowsData = [
    {
      brandName: "Wix",
      msgsCount: 3,
      description: "Design a personalized fitness...",
      members: [1, 2, 3, 4],
      categories: ["E-Commerce", "B2B"],
      tags: ["DigitalTransformation", "OnlineShopping", "BuySellOnline"],
      nextMeetingTime: new Date().getTime() + 1000 * 60 * 60 * 24 * 8,
    },
  ];

  const [selectAll, setSelectAll] = useState<boolean>(false);

  return (
    <table className="table-fixed w-full p-0 m-0 overflow-auto">
      <thead>
        <CustomTableRow props={{ rowType: "header" }} />
      </thead>
      <tbody className="w-full p-0">
        {rowsData.map((data, index: number) => (
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
