"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/app/_theme/ThemeProvider";
const ThemeSwitchButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else if (theme == "light") {
      setTheme("dark");
    }
  };
  return (
    <button
      className="bg-secondaryBg p-1 text-lg text-primaryText rounded-full h-10 w-10 flex items-center justify-center"
      onClick={changeTheme}
    >
      {theme === "dark" ? (
        <i className="fi fi-rr-brightness mt-1"></i>
      ) : (
        <i className="fi fi-rr-moon-stars mt-1"></i>
      )}
    </button>
  );
};

export default ThemeSwitchButton;
