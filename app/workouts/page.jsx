import WorkoutListItem from "./WorkoutListItem";
import workouts from "../assets/workouts.json";
import InfoPopup from "./InfoPopup";

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
      {workouts.map((workoutObj, index) => (
        <WorkoutListItem
          workoutName={workoutObj.name}
          bodyPart={workoutObj.bodyPart}
          imageURL={workoutObj.imageURL}
          equipment={workoutObj.equipment}
          instructions={workoutObj.instructions}
          key={index}
        />
      ))}
    </div>
  );
}
