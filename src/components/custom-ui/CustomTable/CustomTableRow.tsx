/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import NextMeetingCol from "./Fields/NextMeeting/NextMeetingCol";
import CategoriesCol from "./Fields/Categories/CategoriesCol";
import DescriptionCol from "./Fields/Description/DescriptionCol";
import MembersCol from "./Fields/Members/MembersCol";
import TagsCol from "./Fields/Tags/TagsCol";
import BrandCol from "./Fields/Brands/BrandCol";
import CustomTableCol from "./CustomTableCol";

export default function CustomTableRow({ props }: { props: any }) {
  const {
    brandName,
    msgsCount,
    description,
    membersId,
    categories,
    tags,
    nextMeetingTime,
  } = props;

  const RowCols = [
    <input
      type="checkbox"
      className="checkbox checkbox-sm rounded-[0.35rem] checked:border-none border-slate-300"
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

  const type = "column";

  return (
    <tr className="flex p-0 m-0 hover:bg-slate-100 cursor-pointer transition-colors">
      {RowCols.map((col: JSX.Element | null, i: number) =>
        i === 0 || i === RowCols.length - 1 ? (
          <td
            key={i}
            className={`${
              i == 0 ? "min-w-[3.25rem]" : "min-w-[4rem]"
            } flex items-center justify-center border-b border-slate-300 px-[1rem] py-[0.6rem] m-0"`}>
            {col}
          </td>
        ) : (
          <CustomTableCol key={i} props={{ type, col: col }} />
        )
      )}
    </tr>
  );
}
