"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function IsLoggedIn() {
  const user = Cookies.get("user_id");
  useEffect(() => {
    if (user === undefined) {
      redirect("/login");
    }
  });
}
