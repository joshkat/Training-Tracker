"use client";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "../utils/firebaseInit";
import Image from "next/image";
import Cookies from "js-cookie";

export default function GoogleLogin() {
  async function handleLogin() {
    const provider = new GoogleAuthProvider();

    try {
      const userCred = await signInWithPopup(firebaseAuth, provider);
      Cookies.set("user_id", userCred.user.uid);
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
