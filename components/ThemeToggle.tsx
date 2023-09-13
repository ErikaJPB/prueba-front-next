"use client";

import React, { useState, useEffect } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
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

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  const textColor = isDarkMode ? "text-white" : "text-black";
  const iconColor = isDarkMode ? "#FFFFFF" : "#000000";

  return (
    <button
      className={`p-2 m-2 rounded-full bg-gray-200 dark:bg-gray-400 ${textColor}`}
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <CiLight size={20} style={{ color: iconColor }} />
      ) : (
        <MdDarkMode size={20} style={{ color: iconColor }} />
      )}
    </button>
  );
};

export default ThemeToggle;
