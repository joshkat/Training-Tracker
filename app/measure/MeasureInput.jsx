"use client";
import { useState } from "react";
import Image from "next/image";

export default function MeasureInput({ id }) {
  const [value, setValue] = useState("");
  function handleInput(e) {
    const thisInput = document.getElementById(id);
    if (e.target.value === "") {
      thisInput.classList.add("input-error");
      thisInput.classList.remove("input-success");
    } else {
      thisInput.classList.remove("input-error");
      thisInput.classList.add("input-success");
    }
    setValue(e.target.value);
  }

  function uploadToFirebase() {
    console.log(value);
  }

  return (
    <div className="join">
      <input
        type="number"
        className="input input-bordered input-sm text-base join-item"
        id={id}
        onInput={handleInput}
      />
      <button
        className={`btn btn-sm btn-accent join-item ${
          value === "" ? "btn-disabled" : ""
        }`}
        onClick={uploadToFirebase}
      >
        <Image src="/floppy.svg" height={20} width={20} alt="save" />
      </button>
    </div>
  );
}
