import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebaseInit";

async function updateMeasurements(updatedMeasurements) {
  const userId = auth.currentUser.uid;
  const userDocRef = doc(db, "users", userId);

  try {
    await updateDoc(userDocRef, {
      measurements: updatedMeasurements,
    });
  } catch (err) {
    console.error("Error updating measurements: ", err);
  }
}

export { updateMeasurements };
