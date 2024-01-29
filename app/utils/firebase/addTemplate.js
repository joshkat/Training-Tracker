import { auth, db } from "../firebaseInit";
import { doc, updateDoc, arrayUnion, setDoc } from "firebase/firestore";

async function addTemplate(newTemplate, workoutList) {
  await addToUsersList(newTemplate);
  await addToTemplatesDoc(newTemplate.id, workoutList);
}

async function addToUsersList(newTemplate) {
  const userId = auth.currentUser.uid;
  // Reference to the user's document
  const userDocRef = doc(db, "users", userId);

  try {
    // Update the user's `templates` array
    await updateDoc(userDocRef, {
      templates: arrayUnion(newTemplate),
    });
  } catch (error) {
    console.error("Error at addToUsersList: ", error);
  }
}

async function addToTemplatesDoc(id, workoutList) {
  const templateList = workoutList.map(workout => {
    return {
      name: workout,
      notes: "",
      sets: [
        {
          lbs: 0,
          reps: 0,
        },
      ],
    };
  });
  try {
    await setDoc(doc(db, "user_templates", id), { template: templateList });
  } catch (error) {
    console.error("Error at addToTemplatesDoc: ", error);
  }
}

export { addTemplate };
