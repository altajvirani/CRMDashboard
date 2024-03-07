import CustomButton from "../../../CustomButton";
import AddIcon from "../../../../../assets/AddIcon";

export default function BrandHeader() {
  return (
    <>
      <span>Brands</span>
      <CustomButton
        theme={"transparent"}
        icon={<AddIcon styles={"w-[0.9rem] h-[0.9rem] m-auto"} theme={null} />}
        text={null}
        menuOptions={null}
        handlerParams={null}
        handler={null}
      />
    </>
  );
}
