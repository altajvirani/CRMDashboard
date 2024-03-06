import NextMeetingCol from "./Fields/NextMeeting/NextMeetingCol";
import CategoriesCol from "./Fields/Categories/CategoriesCol";
import DescriptionCol from "./Fields/Description/DescriptionCol";
import MembersCol from "./Fields/Members/MembersCol";
import TagsCol from "./Fields/Tags/TagsCol";
import BrandCol from "./Fields/Brands/BrandCol";

export default function CustomTableRow() {
  return (
    <tr className="flex p-0 m-0">
      <td className="flex items-center justify-center border-b border-slate-300 px-[1rem] py-[0.6rem] m-0">
        <input
          type="checkbox"
          className="checkbox checkbox-sm rounded-[0.35rem] checked:border-none border-slate-300"
        />
      </td>
      <td className="w-full flex items-center justify-center overflow-y-scroll no-scrollbar p-0 m-0">
        <BrandCol />
      </td>
      <td className="w-full flex items-center justify-center overflow-y-scroll no-scrollbar p-0 m-0">
        <DescriptionCol />
      </td>
      <td className="w-full flex items-center justify-center overflow-y-scroll no-scrollbar p-0 m-0">
        <MembersCol />
      </td>
      <td className="w-full flex items-center justify-center overflow-y-scroll no-scrollbar p-0 m-0">
        <CategoriesCol />
      </td>
      <td className="w-full flex items-center justify-center overflow-y-scroll no-scrollbar p-0 m-0">
        <TagsCol />
      </td>
      <td className="w-full flex items-center justify-center overflow-y-scroll no-scrollbar p-0 m-0">
        <NextMeetingCol />
      </td>
      <td className="min-w-[4rem] flex items-center justify-center border-b border-slate-300 px-[1rem] py-[0.6rem] m-0" />
    </tr>
  );
}
