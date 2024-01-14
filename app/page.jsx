"use client";
import IsLoggedIn from "./utils/IsLoggedIn";
import TemplateView from "./components/Home/TemplateView";
import WorkoutRoutine from "./components/Home/WorkoutRoutine";

import { useState, useEffect } from "react";
import { firebaseAuth, getUserTemplates } from "./utils/firebaseInit";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const [workoutsProp, setWorkoutsProp] = useState([
    { name: "workout a", sets: [{ lbs: 5, reps: 3 }, {}], notes: "notes on a" },
    { name: "workout b", sets: [{}, {}], notes: "notes on b" },
  ]);
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [templates, setTemplates] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async user => {
      if (user) {
        const userTemplates = await getUserTemplates();
        setTemplates(userTemplates);
        console.log(userTemplates, "these should be the templates");
      } else {
        // User is signed out, clear templates
        setTemplates([]);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []); // Empty dependency array ensures this effect only runs once on mount

  return (
    <>
      <IsLoggedIn />
      <TemplateView
        templates={templates}
        setCurrentTemplate={setCurrentTemplate}
      />
      <WorkoutRoutine
        currentTemplate={currentTemplate}
        workouts={workoutsProp}
        setWorkoutsProp={setWorkoutsProp}
      />
    </>
  );
}
