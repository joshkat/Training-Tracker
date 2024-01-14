"use client";
import Workout from "./Workout";
export default function WorkoutRoutine({
  currentTemplate,
  workouts,
  setWorkoutsProp,
}) {
  // workouts will be an array made up of objects of form {name:"", sets:[], notes:""}
  const updateWorkoutSets = (workoutIndex, newSets) => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts[workoutIndex] = {
      ...updatedWorkouts[workoutIndex],
      sets: newSets,
    };
    setWorkoutsProp(updatedWorkouts);
  };

  const updateWorkoutNotes = (workoutIndex, newNotes) => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts[workoutIndex] = {
      ...updatedWorkouts[workoutIndex],
      notes: newNotes,
    };
    setWorkoutsProp(updatedWorkouts);
  };

  return (
    <dialog id="workout-routing-modal" className="modal modal-bottom">
      <div className="modal-box w-screen h-screen">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">
          Current template is {currentTemplate}
        </h3>
        <p className="py-4">notes</p>
        {workouts.map((workoutsObj, index) => (
          <Workout
            key={index}
            name={workoutsObj.name}
            sets={workoutsObj.sets}
            notes={workoutsObj.notes}
            updateSets={newSets => updateWorkoutSets(index, newSets)}
            updateNotes={newNotes => updateWorkoutNotes(index, newNotes)}
          />
        ))}
      </div>
    </dialog>
  );
}
