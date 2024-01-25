import { auth, db } from "../firebaseInit";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

async function addTemplate(newTemplate) {
  const userId = auth.currentUser.uid;
  // Reference to the user's document
  const userDocRef = doc(db, "users", userId);

  try {
    // Update the user's `templates` array
    await updateDoc(userDocRef, {
      templates: arrayUnion(newTemplate),
    });

    console.log("Success");
  } catch (error) {
    console.error("Error adding template: ", error);
  }
}

export { addTemplate };
