import { auth, db } from "../firebaseInit";
import { doc, getDoc } from "firebase/firestore";

async function getMeasurements() {
  try {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        const measurementsObj = userDocSnap.data().measurements;
        return measurementsObj;
      } else {
        const err = new Error("Users measurements don't exist in db");
        throw err;
      }
    }
  } catch (err) {
    console.error("Error fetching user measurements: ", err);
  }
}

export { getMeasurements };
