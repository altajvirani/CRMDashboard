/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { SideNavbarSectionProps, SideNavbarTabProps } from "../../types";
import Tab from "./Tab";

export default function Section({ props }: { props: SideNavbarSectionProps }) {
  return (
    <div
      className={`mx-[0.5rem] text-slate-700 font-qanelasmedium py-[0.5rem] flex flex-col gap-[${
        props.tabGap
      }] ${
        props.type === "card" &&
        "border border-slate-300 rounded-2xl shadow-[0rem_0rem_0.6rem_-0.25rem_rgba(0,0,0,0.2)] "
      }`}>
      {props.tabs.map((tabProps: SideNavbarTabProps, index: number) => (
        <Tab key={index} props={{ ...tabProps }} />
      ))}
    </div>
  );
}
