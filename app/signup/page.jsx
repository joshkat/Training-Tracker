"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../utils/firebaseInit";
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

        // Create a user document in Firestore with an empty templates array
        const userDocRef = doc(db, "users", user.uid);
        setDoc(userDocRef, {
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
