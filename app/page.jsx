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

  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        setIsActive={setIsActive}
      />
      <WorkoutRoutine
        currentTemplate={currentTemplate}
        setCurrentTemplate={setCurrentTemplate}
        workouts={workoutsProp}
        setWorkoutsProp={setWorkoutsProp}
        count={count}
        setCount={setCount}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </>
  );
}
