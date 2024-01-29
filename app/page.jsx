"use client";
import TemplateView from "./components/Home/TemplateView";
import WorkoutRoutine from "./components/Home/WorkoutRoutine";
import AddTemplate from "./components/Home/AddTemplate";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { getUserTemplates } from "./utils/firebase/getUserTemplates";
import { getTemplate } from "./utils/firebase/getTemplate";
import { isUserSignedIn } from "./utils/firebase/isUserSignedIn";
import { disableButtons } from "./utils/disableButtons";

export default function Home() {
  const [workoutsProp, setWorkoutsProp] = useState([]);
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [templates, setTemplates] = useState(null);
  const router = useRouter();

  async function handleLoad() {
    const signedIn = await isUserSignedIn();
    if (signedIn === false) {
      disableButtons();
      router.push("/login");
      return;
    }
    const userTemplates = await getUserTemplates();
    setTemplates(userTemplates);
  }

  useEffect(() => {
    handleLoad();
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
