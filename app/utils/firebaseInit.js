import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjqXuLawGVgODcSriFEtBmverGuXiXLOU",
  authDomain: "training-tracker-two.firebaseapp.com",
  projectId: "training-tracker-two",
  storageBucket: "training-tracker-two.appspot.com",
  messagingSenderId: "659817989162",
  appId: "1:659817989162:web:6166da1bd98feeaccdaf53",
  measurementId: "G-HMWQ3CCKQV",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
