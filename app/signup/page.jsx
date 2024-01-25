"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../utils/firebaseInit";
import Cookies from "js-cookie";
import Link from "next/link";

export default function SignUp() {
  function signupHandler(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const confirmed_password = e.target[2].value;
    if (email === "") {
      alert("Enter an email!");
      return;
    }
    if (password !== confirmed_password) {
      alert("Your passwords don't match");
      return;
    }
    if (password.length < 6) {
      alert("Your password needs to be > 6 characters");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        Cookies.set("user_id", user.uid);

        // Create a user document in Firestore with an empty templates array
        const userDocRef = doc(db, "users", user.uid);
        setDoc(userDocRef, {
          templates: [],
        })
          .then(() => {
            console.log("User document created successfully");
            window.location = "/";
          })
          .catch(error => {
            console.error("Error creating user document: ", error);
          });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <div className="relative top-20 p-10 sm:p-36">
      <form className="flex flex-col items-center" onSubmit={signupHandler}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            placeholder="noobie@gmail.com"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            placeholder=""
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Confirm Password</span>
          </div>
          <input
            type="password"
            placeholder=""
            className="input input-bordered w-full"
          />
        </label>
        <input type="submit" value="Sign Up" className="btn w-full mt-2" />
      </form>
      <p className="text-center mt-2">
        Already have an account? Click{" "}
        <Link href="/login" className="link link-success">
          here
        </Link>{" "}
        to log in!
      </p>
    </div>
  );
}
