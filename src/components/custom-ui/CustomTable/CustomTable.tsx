/* eslint-disable @typescript-eslint/no-unused-vars */
import CustomTableFooter from "./CustomTableFooter";
import CustomTableHeader from "./CustomTableHeader";
import CustomTableRow from "./CustomTableRow";

export default function CustomTable() {
  return (
    <table className="table-fixed w-full p-0 overflow-auto">
      <CustomTableHeader />
      <tbody className="w-full p-0">
        <CustomTableRow />
        <CustomTableRow />
        <CustomTableRow />
        <CustomTableRow />
        <CustomTableRow />
        <CustomTableFooter />
      </tbody>
    </table>
  );
}
