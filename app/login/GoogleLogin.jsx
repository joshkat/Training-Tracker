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
          measurements: {
            weight: -1,
            bodyfat: -1,
            kcal: -1,
            neck: -1,
            shoulders: -1,
            chest: -1,
            leftbicep: -1,
            rightbicep: -1,
            leftforearm: -1,
            rightforearm: -1,
            upperabs: -1,
            waist: -1,
            lowerabs: -1,
            hips: -1,
            rightthigh: -1,
            leftthigh: -1,
            leftcalf: -1,
            rightcalf: -1,
          },
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
