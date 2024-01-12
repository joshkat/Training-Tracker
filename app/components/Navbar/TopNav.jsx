"use client";
import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function TopNav() {
  const user = Cookies.get("user_id");
  useEffect(() => {
    if (user !== undefined) return;
    const btns = document.querySelectorAll("nav a");
    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.add("btn-disabled");
    }
  });
  return (
    <nav className="navbar hidden sm:block">
      <Link href="/workouts" className="btn">
        Workouts 💪
      </Link>
      <Link href="/" className="btn">
        Home 🏠
      </Link>
      <Link href="/measure" className="btn">
        Measure 📏
      </Link>
    </nav>
  );
}
