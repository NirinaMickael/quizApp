import { createContext } from "react";
import { ThemeTypeContext } from "../types";

const defautltValue : ThemeTypeContext = {
  theme : "light",
  setter:()=>{}
}

export const  ThemeContext =  createContext<ThemeTypeContext>(defautltValue) 