"use client";

import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty("--foreground-rgb", "255, 255, 255");
      root.style.setProperty("--background-start-rgb", "30, 30, 30");
      root.style.setProperty("--background-end-rgb", "50, 50, 50");
    } else {
      root.style.setProperty("--foreground-rgb", "0, 0, 0");
      root.style.setProperty("--background-start-rgb", "214, 214, 214");
      root.style.setProperty("--background-end-rgb", "255, 255, 255");
    }
  }, [isDarkMode]);

  // Define text color based on theme
  const textColor = isDarkMode ? "text-white" : "text-black";

  return (
    <button
      className={`p-2 m-2 rounded-full bg-gray-200 dark:bg-gray-500 ${textColor}`}
      onClick={toggleTheme}
    >
      {isDarkMode ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeToggle;
