import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="navbar hidden sm:block">
      <Link href="/workouts" className="btn">
        Workouts 💪
      </Link>
      <Link href="/" className="btn">
        Home 🏠
      </Link>
      <Link href="/measure" className="btn">
        Measure 📏
      </Link>
    </nav>
  );
}
