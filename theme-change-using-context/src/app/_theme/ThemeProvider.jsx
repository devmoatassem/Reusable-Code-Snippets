"use client";
import React, { createContext, useState, useEffect } from "react";

// Create a context
const ThemeContext = createContext();

// Create a provider component
const ThemeProvider = ({ children }) => {
  // State or any other data you want to provide through the context
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    // NOTE: This should be set based on some kind of toggle or theme selector.
    // I've added this here for demonstration purposes
    // localStorage.setItem("theme", "dark");

    // If the user has selected a theme, use that
    // const selectedTheme = localStorage.getItem("theme");
    // console.log(selectedTheme);
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");

      // Else use light mode
    } else if (
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    // NOTE: This should be set based on some kind of toggle or theme selector.
    // I've added this here for demonstration purposes
    // localStorage.setItem("theme", "dark");

    // If the user has selected a theme, use that
    // const selectedTheme = localStorage.getItem("theme");
    // console.log(selectedTheme);
    console.log(theme);
    if (
      theme == "dark"
    ) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");

      // Else use light mode
    } else if (
      theme == "light"
    ) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
