/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

interface MenuOptionsProps {
  text: string;
  icon: React.ReactNode | null;
  handlerParams: any[] | null;
  handler: ((...args: any) => any) | null;
}

interface CustomButtonProps {
  theme: string | null;
  icon: JSX.Element | null;
  text: string | null;
  menuOptions: MenuOptionsProps[] | null;
  handlerParams: any[] | null;
  handler: ((...args: any) => any) | null;
}

interface ChipProps {
  theme: string | null;
  content: any;
  isClickable: boolean;
}

interface SideNavbarTabProps {
  isClickable: boolean;
  isSelected: boolean;
  appearance: string | null;
  topBorder: boolean;
  start: JSX.Element | null;
  text: string;
  textSize: string | null;
  textBold: boolean;
  end: JSX.Element | null;
}

interface SideNavbarSectionProps {
  type: string;
  tabGap: string | null;
  tabs: SideNavbarTabProps[];
}

interface ITableContext {
  rowsData: RowData[];
  setRowsData: React.Dispatch<React.SetStateAction<RowData[]>>;
  selectAll: boolean;
  setSelectAll: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRowsIds: number[];
  setSelectedRowsIds: React.Dispatch<React.SetStateAction<number[]>>;
  showRowOptions: boolean;
  setShowRowOptions: React.Dispatch<React.SetStateAction<boolean>>;
  rowAction: string | null;
  setRowAction: React.Dispatch<React.SetStateAction<string | null>>;
}

interface RowData {
  id: number;
  brandName: string;
  msgsCount: number;
  description: string;
  members: number[];
  categories: string[];
  tags: string[];
  nextMeetingTime: number;
}

export type {
  MenuOptionsProps,
  CustomButtonProps,
  ChipProps,
  SideNavbarTabProps,
  SideNavbarSectionProps,
  ITableContext,
  RowData,
};
