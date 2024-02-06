"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isUserSignedIn } from "../utils/firebase/isUserSignedIn";
import MeasureInput from "./MeasureInput";

export default function Measure() {
  const generalInfo = ["Weight (lbs)", "Body Fat %", "Caloric Intake"];
  const generalInfoId = ["weight", "bodyfat", "intake"];
  const bodyParts = [
    "Neck",
    "Shoulders",
    "Chest",
    "Left Bicep",
    "Right Bicep",
    "Left Forearm",
    "Right Forearm",
    "Upper Abs",
    "Waist",
    "Lower Abs",
    "Hips",
    "Right Thigh",
    "Left Thigh",
    "Left Calf",
    "Right Calf",
  ];
  const router = useRouter();
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    async function handleLoad() {
      const signedIn = await isUserSignedIn();
      if (signedIn === false) {
        router.push("/login");
        return;
      }
      setSignedIn(true);
    }
    handleLoad();
  });

  return (
    <>
      {signedIn ? (
        <div className="px-5 overflow-scroll h-[calc(100vh-65px)]  no-scrollbar">
          <h1 className="text-xl lg:text-2xl font-bold my-[1rem]">Workouts</h1>
          <h2 className="text-gray-500 font-bold">General Info</h2>
          <ul>
            {generalInfo.map((value, index) => (
              <li key={index} className="flex mb-2">
                <p className="flex-grow">{value}</p>
                <MeasureInput id={generalInfoId[index]} />
              </li>
            ))}
          </ul>
          <br />
          <h2 className="text-gray-500 font-bold">Body Parts (in)</h2>
          <ul>
            {bodyParts.map((value, index) => (
              <li key={index} className="flex mb-2">
                <p className="flex-grow">{value}</p>
                <MeasureInput id={value.replace(/\s+/g, "").toLowerCase()} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <span className="loading loading-spinner w-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
      )}
    </>
  );
}
