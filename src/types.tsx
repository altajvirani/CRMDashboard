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
  appearance: string;
  // icon: React.ReactNode | null;
  icon: JSX.Element | null;
  text: string | null;
  menuOptions: MenuOptionsProps | null;
  handlerParams: any[] | null;
  handler: ((...args: any) => any) | null;
}

export type { MenuOptionsProps, CustomButtonProps };
