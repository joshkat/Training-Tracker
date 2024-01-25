// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjqXuLawGVgODcSriFEtBmverGuXiXLOU",
  authDomain: "training-tracker-two.firebaseapp.com",
  projectId: "training-tracker-two",
  storageBucket: "training-tracker-two.appspot.com",
  messagingSenderId: "659817989162",
  appId: "1:659817989162:web:6166da1bd98feeaccdaf53",
  measurementId: "G-HMWQ3CCKQV",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

function logout() {
  signOut(firebaseAuth);
}

async function getUserTemplates() {
  try {
    const user = firebaseAuth.currentUser;
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

async function addTemplate(newTemplate) {
  const userId = firebaseAuth.currentUser.uid;
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

async function deleteTemplate(templateId) {
  const userId = firebaseAuth.currentUser.uid;
  const userDocRef = doc(db, "users", userId);
  const templates = await getUserTemplates();
  const templateToRemove = templates.filter(obj => obj.id === templateId)[0];

  console.log(templateToRemove, "these are the temp from deleteTemp");

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

export {
  firebaseApp,
  firebaseAuth,
  db,
  logout,
  getUserTemplates,
  addTemplate,
  deleteTemplate,
};
