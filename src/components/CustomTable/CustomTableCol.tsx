/* eslint-disable @typescript-eslint/no-explicit-any */
export default function CustomTableCol({ props }: { props: any }) {
  const {
    type,
    col,
  }: {
    type: string;
    col: JSX.Element | null;
  } = props;

  return (
    <td
      className={`overflow-y-scroll no-scrollbar w-full min-h-[3rem] flex items-center border-r border-b border-slate-300 px-[1rem] py-[0.6rem] m-0 text-gray-500 whitespace-nowrap font-qanelasmedium ${
        type === "header" || type === "row"
          ? " relative " +
            (type === "header" ? "justify-between" : "justify-start")
          : "justify-end"
      } gap-[0.6rem]`}>
      {col}
    </td>
  );
}
