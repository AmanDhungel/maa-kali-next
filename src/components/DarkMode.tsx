// components/DarkModeToggle.js
"use client";

import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme") === "dark";
    if (savedMode) {
      document.body.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    if (!isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="flex items-center gap-2">
    <Switch onClick={toggleDarkMode} checked={isDarkMode ? false : true}>
    </Switch>
      {isDarkMode ? "Dark Mode" : "Light Mode"}
    </div>
  );
}
