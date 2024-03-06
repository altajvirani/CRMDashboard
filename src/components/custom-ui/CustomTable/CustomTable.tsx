/* eslint-disable @typescript-eslint/no-unused-vars */
import AddIcon from "../../../assets/AddIcon";
import MessagesIcon from "../../../assets/MessagesIcon";
import { CustomTableColProps } from "../../../types";
import Chip from "../Chip";
import CustomButton from "../CustomButton";
import CustomTableCol from "./CustomTableCol";

const CustomTable = () => {
  const tableHeaderProps: CustomTableColProps[] = [
    {
      alignment: "start",
      contentType: null,
      isIterable: false,
      content: null,
      actionButton: null,
      actionButtonPosition: null,
    },
    {
      alignment: "start",
      contentType: "text",
      isIterable: false,
      content: "Brands",
      actionButton: (
        <CustomButton
          theme="transparent"
          icon={
            <AddIcon styles={"w-[0.9rem] h-[0.9rem] m-auto"} theme={null} />
          }
          text={null}
          menuOptions={null}
          handlerParams={null}
          handler={null}
        />
      ),
      actionButtonPosition: "end",
    },
    {
      alignment: "start",
      contentType: "text",
      isIterable: false,
      content: "Description",
      actionButton: null,
      actionButtonPosition: null,
    },
    {
      alignment: "start",
      contentType: "text",
      isIterable: false,
      content: "Members",
      actionButton: null,
      actionButtonPosition: null,
    },
    {
      alignment: "start",
      contentType: "text",
      isIterable: false,
      content: "Categories",
      actionButton: null,
      actionButtonPosition: null,
    },
    {
      alignment: "start",
      contentType: "text",
      isIterable: false,
      content: "Tags",
      actionButton: null,
      actionButtonPosition: null,
    },
    {
      alignment: "start",
      contentType: "text",
      isIterable: false,
      content: "Next meeting",
      actionButton: null,
      actionButtonPosition: null,
    },
    {
      alignment: "start",
      contentType: null,
      isIterable: false,
      content: null,
      actionButton: (
        <CustomButton
          theme={"transparent"}
          icon={<AddIcon styles="w-[0.9rem] h-[0.9rem] m-auto" theme={null} />}
          text={null}
          menuOptions={null}
          handlerParams={null}
          handler={null}
        />
      ),
      actionButtonPosition: "center",
    },
  ];

  const tableRowProps: CustomTableColProps[] = [
    {
      alignment: null,
      contentType: null,
      isIterable: false,
      content: null,
      actionButton: null,
      actionButtonPosition: null,
    },
    {
      alignment: "start",
      contentType: "avatar-with-name",
      isIterable: true,
      content: [
        <div className="avatar">
          <div className="w-8 rounded-lg">
            <img src="https://cdn.dribbble.com/userupload/8785643/file/original-5075bee443a2cc799e3867cc744f7037.jpg?resize=752x" />
          </div>
        </div>,
        "Wix",
      ],
      actionButton: (
        <CustomButton
          theme="transparent"
          icon={
            <MessagesIcon
              styles={"w-[0.9rem] h-[0.9rem] m-auto"}
              theme="ghost"
            />
          }
          text="2"
          menuOptions={null}
          handlerParams={null}
          handler={null}
        />
      ),
      actionButtonPosition: "end",
    },
    {
      alignment: "start",
      contentType: "text",
      isIterable: false,
      content: "Develop a personalized fitness app",
      actionButton: null,
      actionButtonPosition: null,
    },
    {
      alignment: "start",
      contentType: "avatars",
      isIterable: true,
      content: [
        [
          ...Array.from({ length: 3 }, (_) => (
            <div className="avatar transition-transform hover:scale-105 active:scale-95">
              <div className="w-9">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          )),
          <div className="avatar placeholder transition-transform hover:scale-105 active:scale-95">
            <div className="w-9 bg-neutral text-neutral-content">
              <span>99+</span>
            </div>
          </div>,
        ],
      ],
      actionButton: null,
      actionButtonPosition: null,
    },
    {
      alignment: "start",
      contentType: "chips",
      isIterable: true,
      content: [
        <Chip theme="success" content="E-Commerce" isClickable={true} />,
        <Chip theme="danger" content="B2B" isClickable={true} />,
      ],
      actionButton: null,
      actionButtonPosition: null,
    },
    {
      alignment: "start",
      contentType: "chips",
      isIterable: true,
      content: [
        <Chip
          theme="ghost"
          content="#DigitalTransformation"
          isClickable={true}
        />,
        <Chip theme="ghost" content="#OnlineShopping" isClickable={true} />,
        <Chip theme="ghost" content="#BuySellOnline" isClickable={true} />,
      ],
      actionButton: null,
      actionButtonPosition: null,
    },
    {
      alignment: "start",
      contentType: "chips",
      isIterable: true,
      content: [
        <Chip theme="success" content="in 30 minutes" isClickable={true} />,
      ],
      actionButton: null,
      actionButtonPosition: null,
    },
    {
      alignment: "start",
      contentType: "text",
      isIterable: false,
      content: "Add calculation",
      actionButton: (
        <CustomButton
          theme="transparent"
          icon={
            <AddIcon styles={"w-[0.9rem] h-[0.9rem] m-auto"} theme={null} />
          }
          text={null}
          menuOptions={null}
          handlerParams={null}
          handler={null}
        />
      ),
      actionButtonPosition: null,
    },
  ];

  const tableFooterProps: CustomTableColProps[] = [
    {
      alignment: null,
      contentType: null,
      isIterable: false,
      content: null,
      actionButton: null,
      actionButtonPosition: null,
    },
    {
      alignment: "end",
      contentType: "text",
      isIterable: false,
      content: [
        <>
          <Chip theme="transparent" content="10" isClickable={false} />
          {`count`}
        </>,
      ],
      actionButton: null,
      actionButtonPosition: "start",
    },
    {
      alignment: "end",
      contentType: "text",
      isIterable: false,
      content: "Add calculation",
      actionButton: (
        <CustomButton
          theme="transparent"
          icon={
            <AddIcon styles={"w-[0.9rem] h-[0.9rem] m-auto"} theme={null} />
          }
          text={null}
          menuOptions={null}
          handlerParams={null}
          handler={null}
        />
      ),
      actionButtonPosition: "start",
    },
    {
      alignment: "end",
      contentType: "text",
      isIterable: false,
      content: "Add calculation",
      actionButton: (
        <CustomButton
          theme="transparent"
          icon={
            <AddIcon styles={"w-[0.9rem] h-[0.9rem] m-auto"} theme={null} />
          }
          text={null}
          menuOptions={null}
          handlerParams={null}
          handler={null}
        />
      ),
      actionButtonPosition: "start",
    },
    {
      alignment: "end",
      contentType: "text",
      isIterable: false,
      content: "Add calculation",
      actionButton: (
        <CustomButton
          theme="transparent"
          icon={
            <AddIcon styles={"w-[0.9rem] h-[0.9rem] m-auto"} theme={null} />
          }
          text={null}
          menuOptions={null}
          handlerParams={null}
          handler={null}
        />
      ),
      actionButtonPosition: "start",
    },
    {
      alignment: "end",
      contentType: "text",
      isIterable: false,
      content: "Add calculation",
      actionButton: (
        <CustomButton
          theme="transparent"
          icon={
            <AddIcon styles={"w-[0.9rem] h-[0.9rem] m-auto"} theme={null} />
          }
          text={null}
          menuOptions={null}
          handlerParams={null}
          handler={null}
        />
      ),
      actionButtonPosition: "start",
    },
    {
      alignment: null,
      contentType: null,
      isIterable: false,
      content: null,
      actionButton: null,
      actionButtonPosition: null,
    },
    {
      alignment: null,
      contentType: null,
      isIterable: false,
      content: null,
      actionButton: null,
      actionButtonPosition: null,
    },
  ];

  return (
    <table className="table-fixed w-full">
      <th className="w-full p-0">
        <CustomTableCol props={tableHeaderProps} />
      </th>
      <tbody className="w-full p-0">
        <CustomTableCol props={tableRowProps} />
        <CustomTableCol props={tableRowProps} />
        <CustomTableCol props={tableRowProps} />
        <CustomTableCol props={tableRowProps} />
        <CustomTableCol props={tableRowProps} />
        <CustomTableCol props={tableRowProps} />
      </tbody>
      <tfoot className="w-full p-0">
        <CustomTableCol props={tableFooterProps} />
      </tfoot>
    </table>
  );
};

export default CustomTable;
