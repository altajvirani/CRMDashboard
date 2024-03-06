import NextMeetingHeader from "./Fields/NextMeeting/NextMeetingHeader";
import BrandHeader from "./Fields/Brands/BrandsHeader";
import CategoriesHeader from "./Fields/Categories/CategoriesHeader";
import DescriptionHeader from "./Fields/Description/DescriptionHeader";
import MembersHeader from "./Fields/Members/MembersHeader";
import TagsHeader from "./Fields/Tags/TagsHeader";
import CustomButton from "../CustomButton";
import AddIcon from "../../../assets/AddIcon";

export default function CustomTableHeader() {
  return (
    <th className="flex p-0 m-0">
      <td className="flex items-center justify-center border-b border-slate-300 px-[1rem] py-[0.6rem] m-0">
        <input
          type="checkbox"
          className="checkbox checkbox-sm rounded-[0.35rem] checked:border-none border-slate-300"
        />
      </td>
      <td className="w-full flex items-center justify-center overflow-y-scroll no-scrollbar p-0 m-0">
        <BrandHeader />
      </td>
      <td className="w-full flex items-center justify-center overflow-y-scroll no-scrollbar p-0 m-0">
        <DescriptionHeader />
      </td>
      <td className="w-full flex items-center justify-center overflow-y-scroll no-scrollbar p-0 m-0">
        <MembersHeader />
      </td>
      <td className="w-full flex items-center justify-center overflow-y-scroll no-scrollbar p-0 m-0">
        <CategoriesHeader />
      </td>
      <td className="w-full flex items-center justify-center overflow-y-scroll no-scrollbar p-0 m-0">
        <TagsHeader />
      </td>
      <td className="w-full flex items-center justify-center overflow-y-scroll no-scrollbar p-0 m-0">
        <NextMeetingHeader />
      </td>
      <td className="flex items-center justify-center border-b border-slate-300 px-[1rem] py-[0.6rem] m-0">
        <CustomButton
          theme={"transparent"}
          icon={
            <AddIcon styles={"w-[0.9rem] h-[0.9rem] m-auto"} theme={null} />
          }
          text={null}
          menuOptions={null}
          handlerParams={null}
          handler={null}
        />
      </td>
    </th>
  );
}
