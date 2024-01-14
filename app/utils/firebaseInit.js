// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
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

export { firebaseApp, firebaseAuth, logout, getUserTemplates };
