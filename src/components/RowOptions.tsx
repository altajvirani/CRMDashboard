/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect } from "react";
import ArchiveIcon from "../assets/ArchiveIcon";
import CancelIcon from "../assets/CancelIcon";
import DeleteIcon from "../assets/DeleteIcon";
import Chip from "./Chip";
import CustomButton from "./CustomButton";
import { TableContext } from "../context";

export default function RowOptions() {
  const { selectedRowsIds, setRowAction, showRowOptions, setShowRowOptions } =
    useContext(TableContext) as {
      selectedRowsIds: number[];
      showRowOptions: boolean;
      setShowRowOptions: React.Dispatch<React.SetStateAction<boolean>>;
      setRowAction: React.Dispatch<React.SetStateAction<string | null>>;
    };

  useEffect(() => {
    if (selectedRowsIds.length > 0) setShowRowOptions(true);
    else setShowRowOptions(false);
  }, [selectedRowsIds]);

  return (
    showRowOptions && (
      <div className="absolute bg-white bottom-[1.6rem] left-0 right-0 m-auto w-max h-max border border-slate-300 rounded-xl px-[0.8rem] py-[0.8rem] shadow-[0rem_0rem_1rem_-0.2rem_rgb(98,107,128,0.3)] flex items-center gap-[1.3rem]">
        <div className="flex items-center justify-center  gap-[0.35rem]">
          <Chip
            theme="dark"
            content={selectedRowsIds.length}
            isClickable={false}
          />
          <span>selected</span>
        </div>
        <div className="flex items-center justify-center gap-[0.6rem]">
          <CustomButton
            theme={null}
            icon={<ArchiveIcon styles="w-[0.9rem] h-[0.9rem] ml-0 my-auto" />}
            text={"Archive"}
            menuOptions={null}
            handlerParams={null}
            handler={() => setRowAction("archive")}
          />
          <CustomButton
            theme="danger"
            icon={<DeleteIcon styles="w-[0.9rem] h-[0.9rem] ml-0 my-auto" />}
            text={"Delete"}
            menuOptions={null}
            handlerParams={null}
            handler={() => setRowAction("delete")}
          />
          <CustomButton
            theme={null}
            icon={null}
            text={"More"}
            menuOptions={[]}
            handlerParams={null}
            handler={null}
          />
        </div>
        <CustomButton
          theme={"transparent"}
          icon={<CancelIcon styles="w-[0.7rem] h-[0.7rem] m-auto" />}
          text={null}
          menuOptions={null}
          handlerParams={null}
          handler={() => setShowRowOptions(false)}
        />
      </div>
    )
  );
}
