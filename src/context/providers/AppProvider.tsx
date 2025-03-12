"use client";
import { FC, ReactNode, useState } from "react";
import { AppContext } from "../appContext";

interface AppProps {
  children: ReactNode;
}
const AppProvider: FC<AppProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const toggleMenu = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <AppContext.Provider
      value={{
        collapsed,
        toggleMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
