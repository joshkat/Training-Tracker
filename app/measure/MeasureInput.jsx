"use client";
import Image from "next/image";
import { useState } from "react";
import { updateMeasurements } from "../utils/firebase/updateMeasurements";

export default function MeasureInput({ id, measurements, setMeasurements }) {
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
    const newMeasurements = { ...measurements };
    newMeasurements[id] = parseInt(value);

    updateMeasurements(newMeasurements);

    setValue(""); // disables save button
    setMeasurements(newMeasurements);
  }

  return (
    <div className="join">
      <input
        type="number"
        className="input input-bordered input-sm text-base join-item w-32 sm:w-full"
        id={id}
        onInput={handleInput}
        defaultValue={measurements[id] === -1 ? "" : measurements[id]}
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
