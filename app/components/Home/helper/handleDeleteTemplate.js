import { getUserTemplates } from "@/app/utils/firebase/getUserTemplates";
import { deleteTemplate } from "@/app/utils/firebase/deleteTemplate";

async function handleDeleteTemplate(id, setTemplates) {
  setTemplates(null);
  try {
    await deleteTemplate(id);
    const templates = await getUserTemplates();
    setTemplates(templates);
  } catch (error) {
    console.error(`There was a problem deleting the template: ${error}`);
  }
}

export { handleDeleteTemplate };
