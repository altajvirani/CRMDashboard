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
  menuOptions: MenuOptionsProps | null;
  handlerParams: any[] | null;
  handler: ((...args: any) => any) | null;
}

interface ChipProps {
  theme: string | null;
  text: string;
}

interface CustomTableColProps {
  alignment: string | null;
  checkbox: JSX.Element | null;
  contentType: string | null;
  isIterable: boolean;
  content: any | any[] | null;
  actionButton: JSX.Element | null;
  actionButtonPosition: string | null;
}

export type {
  MenuOptionsProps,
  CustomButtonProps,
  ChipProps,
  CustomTableColProps,
};
