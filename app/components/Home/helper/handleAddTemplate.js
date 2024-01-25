import { addTemplate } from "@/app/utils/firebase/addTemplate";
import { v4 as uuidv4 } from "uuid";

async function handleAddTemplate(templates, setTemplates) {
  const title = document.querySelector("#add-template-modal input").value;
  const summary = document.querySelectorAll("#add-template-modal textarea")[0]
    .value;
  const workoutList = document
    .querySelectorAll("#add-template-modal textarea")[1]
    .value.split(",");
  const uuid = uuidv4();
  const lastTrained = convertToUnix();
  const newTemplate = {
    id: uuid,
    lastTrained: lastTrained,
    summary: summary,
    title: title,
  };
  const tempTemplates = [...templates, newTemplate];

  setTemplates(null);
  try {
    await addTemplate(newTemplate, workoutList);
    setTemplates(tempTemplates);
  } catch (error) {
    console.error(`There was a problem adding the template ${error}`);
  }
}

function convertToUnix() {
  const date = new Date();
  const milliseconds = date.getTime();
  const seconds = Math.floor(milliseconds / 1000);
  const nanoseconds = (milliseconds % 1000) * 1e6;

  return { nanoseconds, seconds };
}

export { handleAddTemplate };
