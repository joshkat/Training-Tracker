import { db, auth } from "../firebaseInit";
import { getUserTemplates } from "./getUserTemplates";
import { doc, updateDoc, arrayRemove } from "firebase/firestore";

async function deleteTemplate(templateId) {
  const userId = auth.currentUser.uid;
  const userDocRef = doc(db, "users", userId);
  const templates = await getUserTemplates();
  const templateToRemove = templates.filter(obj => obj.id === templateId)[0];

  try {
    await updateDoc(userDocRef, {
      templates: arrayRemove(templateToRemove),
    });
    console.log(`shouldve deleted template with id of ${templateId}`);
  } catch (error) {
    console.error(`Error removing template template ${templateId}
      Here is the error generated:
      ${error}
      `);
  }
}

export { deleteTemplate };
