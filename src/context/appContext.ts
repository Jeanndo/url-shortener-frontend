import { createContext } from "react";

interface AppConextType {
    collapsed: boolean;
    toggleMenu:()=>void;

}

const defaultContext: AppConextType = {
    collapsed: false,
    toggleMenu: () => { },

}


export const AppContext = createContext<AppConextType>(defaultContext)