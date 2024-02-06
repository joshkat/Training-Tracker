"use client";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    setTheme(localTheme ? localTheme : "light");
  }, []);

  return (
    <button
      className="btn btn-primary text-xl join-item"
      onClick={() => {
        const html = document.querySelector("html");
        if (theme === "black") {
          html.setAttribute("data-theme", "light");
          setTheme("light");
          localStorage.setItem("theme", "light");
        } else {
          html.setAttribute("data-theme", "black");
          setTheme("black");
          localStorage.setItem("theme", "black");
        }
      }}
    >
      {theme === "black" ? "🌞" : "🌚"}
    </button>
  );
}
