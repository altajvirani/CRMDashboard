/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomButton from "../../../CustomButton";
import MessagesIcon from "../../../../../assets/MessagesIcon";

export default function BrandCol({ props }: { props: any }) {
  const { brandName, msgsCount } = props;

  return (
    <>
      <div className="flex items-center gap-[0.6rem]">
        <div className="avatar">
          <div className="w-8 rounded-lg">
            <img src="https://cdn.dribbble.com/userupload/8785643/file/original-5075bee443a2cc799e3867cc744f7037.jpg?resize=752x" />
          </div>
        </div>
        <span>{brandName}</span>
      </div>
      <div className="absolute h-full flex items-center justify-center right-[0.6rem]">
        <CustomButton
          theme="transparent"
          icon={
            <MessagesIcon
              styles={"w-[0.9rem] h-[0.9rem] m-auto"}
              theme="ghost"
            />
          }
          text={msgsCount}
          menuOptions={null}
          handlerParams={null}
          handler={null}
        />
      </div>
    </>
  );
}
