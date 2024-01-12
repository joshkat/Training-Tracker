"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebaseInit";
import Cookies from "js-cookie";

export default function EmailForm() {
  function loginHandler(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(firebaseAuth, email, password)
        .then(userCredential => {
          const user = userCredential.user;
          Cookies.set("user_id", user.uid);
          window.location = "/";
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    } else {
      console.log("one is empty u bozo");
    }
  }
  return (
    <form className="flex flex-col items-center" onSubmit={loginHandler}>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Email</span>
        </div>
        <input
          type="email"
          placeholder="schwarzenegger@gmail.com"
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
      <input
        type="submit"
        value={"Login"}
        className="btn w-full max-w-[320px] mt-2"
      />
    </form>
  );
}
