import { auth, db } from "../firebaseInit";
import { doc, getDoc } from "firebase/firestore";

async function getTemplate(id, setWorkouts) {
  try {
    const user = auth.currentUser;
    const templateDocRef = doc(db, "user_templates", id);
    const templateDocSnap = await getDoc(templateDocRef);
    if (templateDocSnap.exists()) {
      const templateArray = templateDocSnap.data().template;

      setWorkouts(templateArray);
      console.log(templateArray);
    }
  } catch (error) {
    console.error("Error fetching user template: ", error);
  }
}

export { getTemplate };
