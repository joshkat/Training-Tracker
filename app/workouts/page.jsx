import InfoPopup from "./InfoPopup";
import WorkoutList from "./WorkoutList";

export const metadata = {
  title: "Workouts",
  description: "Workouts Page",
};

export default function Workouts() {
  return (
    <div className="px-5 overflow-scroll h-[calc(100vh-65px)]  no-scrollbar">
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <InfoPopup />
      </div>
      <h1 className="text-xl lg:text-2xl font-bold my-[1rem]">Workouts</h1>
      <WorkoutList />
    </div>
  );
}
