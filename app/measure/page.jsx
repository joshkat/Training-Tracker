import IsLoggedIn from "../utils/IsLoggedIn";

export const metadata = {
  title: "Measure",
  description: "Measurements Page",
};

export default function Measure() {
  return (
    <>
      <IsLoggedIn />
      <div>Measure</div>
    </>
  );
}
