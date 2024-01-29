import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="navbar hidden sm:block">
      <Link href="/workouts" className="btn to-disable">
        Workouts 💪
      </Link>
      <Link href="/" className="btn to-disable">
        Home 🏠
      </Link>
      <Link href="/measure" className="btn to-disable">
        Measure 📏
      </Link>
    </nav>
  );
}
