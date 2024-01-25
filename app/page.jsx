"use client";
import TemplateView from "./components/Home/TemplateView";
import WorkoutRoutine from "./components/Home/WorkoutRoutine";

import { useState, useEffect } from "react";
import { auth } from "./utils/firebaseInit";
import { getUserTemplates } from "./utils/firebase/getUserTemplates";
import { onAuthStateChanged } from "firebase/auth";
import AddTemplate from "./components/Home/AddTemplate";

export default function Home() {
  const [workoutsProp, setWorkoutsProp] = useState([
    { name: "workout a", sets: [{ lbs: 5, reps: 3 }, {}], notes: "notes on a" },
    { name: "workout b", sets: [{}, {}], notes: "notes on b" },
  ]);
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [templates, setTemplates] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
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
      <AddTemplate templates={templates} setTemplates={setTemplates} />
      <TemplateView
        templates={templates}
        setCurrentTemplate={setCurrentTemplate}
        setTemplates={setTemplates}
      />
      <WorkoutRoutine
        currentTemplate={currentTemplate}
        workouts={workoutsProp}
        setWorkoutsProp={setWorkoutsProp}
      />
    </>
  );
}
