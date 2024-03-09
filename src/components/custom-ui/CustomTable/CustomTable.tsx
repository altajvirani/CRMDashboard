/* eslint-disable react-hooks/exhaustive-deps */
import { createRef, useEffect, useState } from "react";
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
      nextMeetingTime: new Date().getTime() + 1000 * 60 * 60 * 24,
    },
  ];

  const [selectAll, setSelectAll] = useState<boolean>(false);

  const rowsRef = Array.from({ length: rowsData.length }, () =>
    createRef<HTMLInputElement>()
  );
  useEffect(() => {
    rowsRef.forEach((rowRef) => {
      if (rowRef.current) rowRef.current.checked = selectAll;
    });
  }, [selectAll]);

  return (
    <table className="table-fixed w-full p-0 m-0 overflow-auto">
      <thead>
        <CustomTableRow props={{ rowType: "header", setSelectAll }} />
      </thead>
      <tbody className="w-full p-0">
        {rowsData.map((data, index: number) => (
          <CustomTableRow
            key={index}
            props={{
              rowType: "row",
              ref: rowsRef[index],
              rowData: data,
            }}
          />
        ))}
        <CustomTableRow props={{ rowType: "footer" }} />
      </tbody>
    </table>
  );
}
