import NextMeetingHeader from "./Fields/NextMeeting/NextMeetingHeader";
import BrandHeader from "./Fields/Brands/BrandsHeader";
import CategoriesHeader from "./Fields/Categories/CategoriesHeader";
import DescriptionHeader from "./Fields/Description/DescriptionHeader";
import MembersHeader from "./Fields/Members/MembersHeader";
import TagsHeader from "./Fields/Tags/TagsHeader";
import CustomButton from "../CustomButton";
import AddIcon from "../../../assets/AddIcon";
import CustomTableCol from "./CustomTableCol";

export default function CustomTableHeader() {
  const HeaderCols = [
    <input
      type="checkbox"
      className="checkbox checkbox-sm rounded-[0.35rem] checked:border-none border-slate-300"
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
      menuOptions={null}
      handlerParams={null}
      handler={null}
    />,
  ];

  const type = "header";

  return (
    <tr className="flex p-0 m-0">
      {HeaderCols.map((col: JSX.Element | null, i: number) =>
        i === 0 || i === HeaderCols.length - 1 ? (
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
