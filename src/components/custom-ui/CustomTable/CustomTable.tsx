/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import CustomTableRow from "./CustomTableRow";

export default function CustomTable() {
  const rowsData = [
    ...Array.from({ length: 14 }, (_s) => ({
      brandName: "Wix",
      msgsCount: 3,
      description: "Design a personalized fitness...",
      members: [1, 2, 3, 4],
      categories: ["E-Commerce", "B2B"],
      tags: ["DigitalTransformation", "OnlineShopping", "BuySellOnline"],
      nextMeetingTime: new Date().getTime() + 1000 * 60 * 60 * 24 * 8,
    })),
  ];

  return (
    <table className="table-auto xl:table-fixed w-full h-full mb-[15.2rem]">
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
