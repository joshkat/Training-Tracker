"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebaseInit";
import Cookies from "js-cookie";

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
    if (password != confirmed_password) {
      alert("Your passwords don't match");
      return;
    }
    if (password.length < 6) {
      alert("Your password needs to be > 6 characters");
      return;
    }

    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then(userCredential => {
        //signed up
        const user = userCredential.user;
        console.log(user);
        Cookies.set("user_id", user.uid);
        window.location = "/";
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <div className="relative top-56">
      <form className="flex flex-col items-center" onSubmit={signupHandler}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            placeholder="noobie@gmail.com"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Confirm Password</span>
          </div>
          <input
            type="password"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <input
          type="submit"
          value="Sign Up"
          className="btn w-full max-w-[320px] mt-2"
        />
      </form>
    </div>
  );
}
