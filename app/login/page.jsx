import Link from "next/link";
import EmailForm from "./EmailForm";
import GoogleLogin from "./GoogleLogin";

export default async function Login() {
  return (
    <div className="p-10 sm:p-36 relative top-20">
      <EmailForm />
      <p className="text-center mt-2">
        No account? Click{" "}
        <Link href="/signup" className="link link-success">
          here
        </Link>{" "}
        to create one!
      </p>
      <div className="divider">OR</div>
      <GoogleLogin />
    </div>
  );
}
