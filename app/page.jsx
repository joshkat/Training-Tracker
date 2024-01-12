import IsLoggedIn from "./utils/IsLoggedIn";
import TemplateView from "./components/Home/TemplateView";

export default function Home() {
  return (
    <>
      <IsLoggedIn />
      <TemplateView />
    </>
  );
}
