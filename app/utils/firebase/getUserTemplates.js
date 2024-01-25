import { auth, db } from "../firebaseInit";
import { doc, getDoc } from "firebase/firestore";

async function getUserTemplates() {
  try {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        const templatesArray = userDocSnap.data().templates;
        return templatesArray;
      } else {
        return [];
      }
    }
    console.log("User isn't signed in");
  } catch (err) {
    console.error("Error fetching user templates: ", err);
  }
}

export { getUserTemplates };
