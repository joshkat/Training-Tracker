import { db, auth } from "../firebaseInit";
import { getUserTemplates } from "./getUserTemplates";
import { doc, updateDoc, arrayRemove, deleteDoc } from "firebase/firestore";

async function deleteTemplate(templateId) {
  await deleteFromUsersList(templateId);
  await deleteFromTemplatesDoc(templateId);
}

async function deleteFromUsersList(id) {
  const userId = auth.currentUser.uid;
  const userDocRef = doc(db, "users", userId);
  const templates = await getUserTemplates();
  const templateToRemove = templates.filter(obj => obj.id === id)[0];

  try {
    await updateDoc(userDocRef, {
      templates: arrayRemove(templateToRemove),
    });
  } catch (error) {
    console.error(`Error removing template template ${id}
        Here is the error generated:
        ${error}
        `);
  }
}

async function deleteFromTemplatesDoc(id) {
  const templateDocRef = doc(db, "user_templates", id);
  try {
    await deleteDoc(templateDocRef);
  } catch (error) {
    console.error(`Error at deleteFromTemplatesDoc: ${error}`);
  }
}

export { deleteTemplate };
