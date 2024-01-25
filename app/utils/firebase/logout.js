import { signOut } from "firebase/auth";
import { auth } from "../firebaseInit";

function logout() {
  signOut(auth);
}

export { logout };
