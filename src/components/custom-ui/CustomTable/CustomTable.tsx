/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import CustomTableFooter from "./CustomTableFooter";
import CustomTableHeader from "./CustomTableHeader";
import CustomTableRow from "./CustomTableRow";

export default function CustomTable() {
  const rowsData = [
    {
      brandName: "Wix",
      msgsCount: 3,
      description: "Design a personalized fitness...",
      membersId: [1, 2, 3, 4],
      categories: ["E-Commerce", "B2B"],
      tags: ["DigitalTransformation", "OnlineShopping", "BuySellOnline"],
      nextMeetingTime: new Date().getTime() + 1000 * 60 * 60 * 24,
    },
  ];

  return (
    <table className="table-fixed w-full p-0 overflow-auto">
      <CustomTableHeader />
      <tbody className="w-full p-0">
        {rowsData.map((data: any, index: number) => (
          <CustomTableRow key={index} props={data} />
        ))}
        <CustomTableFooter />
      </tbody>
    </table>
  );
}
