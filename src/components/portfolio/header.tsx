"use client";

import { useContext } from "react";

import { MdDarkMode, MdLightMode } from "react-icons/md";

import MyThemeContext from "@/store/ThemeContext";

const Header = () => {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }

  return (
    <div>
      <button className="" onClick={toggleThemeHandler}>
        {themeCtx.isDarkMode ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </div>
  );
};
export default Header;
