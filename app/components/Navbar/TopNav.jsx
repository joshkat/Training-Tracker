import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

export default function TopNav() {
  return (
    <nav className="navbar hidden sm:flex bg-base-300 justify-between">
      <div className="text-xl font-bold ml-2 join outline outline-1">
        <p className="join-item flex items-center mx-2">Fitness Tracker</p>
        <ThemeSwitch />
      </div>
      <div className="flex justify-evenly w-[400px]">
        <Link href="/" className="btn btn-primary to-disable">
          Home 🏠
        </Link>
        <Link href="/workouts" className="btn btn-primary to-disable">
          Workouts 💪
        </Link>
        <Link href="/measure" className="btn btn-primary to-disable">
          Measure 📏
        </Link>
      </div>
    </nav>
  );
}
