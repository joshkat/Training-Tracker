"use client";

import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { firebaseAuth } from "../utils/firebaseInit";

export default function GoogleLogin() {
  function handleLogin() {
    const provider = new GoogleAuthProvider();
    return signInWithRedirect(firebaseAuth, provider);
  }
  return (
    <button className="btn" onClick={e => handleLogin()}>
      Login with Google
    </button>
  );
}
