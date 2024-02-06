"use client";
import { useEffect, useState } from "react";

export default function InfoPopup() {
  const [hasSeen, setHasSeen] = useState(true);
  useEffect(() => {
    setHasSeen(
      localStorage.getItem("saw_workout_info") === null ? false : true,
    );
  }, []);

  return (
    <div
      role="alert"
      className={`alert alert-info ${hasSeen ? "hidden" : ""}`}
      id="info-popup"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="stroke-current shrink-0 w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span>
        Clicking on a workout will expand it to show the instructions on how to
        perform the movement
      </span>
      <div>
        <button
          className="btn btn-sm"
          onClick={() => {
            document.getElementById("info-popup").classList.toggle("hidden");
            localStorage.setItem("saw_workout_info", true);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
