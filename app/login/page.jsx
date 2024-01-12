import { firebaseAuth } from "../utils/firebaseInit";
import EmailForm from "./EmailForm";
import GoogleLogin from "./GoogleLogin";

export default async function Login() {
  return (
    <div className="p-10 sm:p-20">
      <EmailForm />
      <div className="divider"></div>
      <GoogleLogin />
    </div>
  );
}
