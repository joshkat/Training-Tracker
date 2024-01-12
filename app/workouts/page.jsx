import IsLoggedIn from "../utils/IsLoggedIn";

export const metadata = {
  title: "Workouts",
  description: "Workouts Page",
};

export default function Workouts() {
  return (
    <>
      <div>Workouts</div>
      <IsLoggedIn />
    </>
  );
}
