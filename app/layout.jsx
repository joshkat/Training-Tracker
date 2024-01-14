import TopNav from "./components/Navbar/TopNav";
import BottomNav from "./components/Navbar/BottomNav";
import "./globals.css";

export const metadata = {
  title: "Training Tracker",
  description: "Workout tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <TopNav />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
