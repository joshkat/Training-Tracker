"use client";
import TemplateView from "./components/Home/TemplateView";
import WorkoutRoutine from "./components/Home/WorkoutRoutine";
import AddTemplate from "./components/Home/AddTemplate";

import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebaseInit";
import { getUserTemplates } from "./utils/firebase/getUserTemplates";
import { getTemplate } from "./utils/firebase/getTemplate";

export default function Home() {
  const [workoutsProp, setWorkoutsProp] = useState([]);
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

  useEffect(() => {
    if (currentTemplate !== null) {
      getTemplate(currentTemplate, setWorkoutsProp);
    }
  }, [currentTemplate]);

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
