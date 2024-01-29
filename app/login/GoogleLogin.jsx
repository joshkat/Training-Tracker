"use client";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db, auth } from "../utils/firebaseInit";
import Image from "next/image";

export default function GoogleLogin() {
  async function handleLogin() {
    const provider = new GoogleAuthProvider();

    try {
      const userCred = await signInWithPopup(auth, provider);
      const user = userCred.user;

      // Check if the user document exists and create it if it doesn't
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (!userDocSnap.exists()) {
        // Document does not exist, create it with an empty templates array
        await setDoc(userDocRef, {
          templates: [],
        });
      }

      // Redirect to home page after sign in and document creation/check
      window.location = "/";
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <button className="btn w-full" onClick={e => handleLogin()}>
      <Image src="/googleG.svg" height={20} width={20} alt="G" />
      Login with Google
    </button>
  );
}
