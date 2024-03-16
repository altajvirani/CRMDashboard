import { createContext } from "react";
import { ITableContext } from "./types";

export const TableContext = createContext<ITableContext>({} as ITableContext);
