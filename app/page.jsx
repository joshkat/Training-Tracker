"use client";
import IsLoggedIn from "./utils/IsLoggedIn";
import TemplateView from "./components/Home/TemplateView";
import WorkoutRoutine from "./components/Home/WorkoutRoutine";

import { useState } from "react";

export default function Home() {
  const [workoutsProp, setWorkoutsProp] = useState([
    { name: "workout a", sets: [{ lbs: 5, reps: 3 }, {}], notes: "notes on a" },
    { name: "workout b", sets: [{}, {}], notes: "notes on b" },
  ]);
  const [currentTemplate, setCurrentTemplate] = useState(null);
  return (
    <>
      <IsLoggedIn />
      <TemplateView setCurrentTemplate={setCurrentTemplate} />
      <WorkoutRoutine
        currentTemplate={currentTemplate}
        workouts={workoutsProp}
        setWorkoutsProp={setWorkoutsProp}
      />
    </>
  );
}
