"use client";

import MyThemeContext from "@/store/ThemeContext";

import { useContext } from "react";

const Header = () => {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }

  return (
    <div>
      <button className="" onClick={toggleThemeHandler}>
        Toggle {themeCtx.isDarkMode ? "Light" : "Dark"}
      </button>
    </div>
  );
};
export default Header;
