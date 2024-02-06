// import WorkoutListItem from "./WorkoutListItem";
import workouts from "../assets/workouts.json";
import WorkoutListItem from "./WorkoutListItem";

export default function WorkoutList() {
  return (
    <>
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
    </>
  );
}
