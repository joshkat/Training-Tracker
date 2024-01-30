"use client";
import Workout from "./Workout";
export default function WorkoutRoutine({
  currentTemplate,
  setCurrentTemplate,
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

  const addWorkout = workoutName => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts.push({
      name: workoutName,
      sets: [],
      notes: "",
    });
    setWorkoutsProp(updatedWorkouts);
  };

  const removeWorkout = workoutIndex => {
    const updatedWorkouts = workouts.filter(
      (_, index) => index !== workoutIndex,
    );
    setWorkoutsProp(updatedWorkouts);
  };

  return (
    <dialog id="workout-routing-modal" className="modal modal-bottom">
      <div className="modal-box w-screen h-screen">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => {
              setCurrentTemplate(null);
              setWorkoutsProp([]);
            }}
          >
            ✕
          </button>
        </form>

        {workouts.length === 0 ? (
          <div className="grid place-items-center h-full">
            <div className="loading loading-spinner w-32"></div>
          </div>
        ) : (
          <>
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
                removeWorkout={() => removeWorkout(index)}
              />
            ))}
            <div className="flex-grow">
              <button
                className="btn btn-info btn-sm w-full"
                onClick={() =>
                  document.getElementById("add_exercise_btn").showModal()
                }
              >
                Add Exercise
              </button>
              <dialog id="add_exercise_btn" className="modal">
                <div className="modal-box rounded-lg w-4/5 flex flex-col items-center">
                  <h3 className="font-bold text-lg">
                    What is the name of this new workout?
                  </h3>
                  <input
                    type="text"
                    id="add-exercise-input"
                    className="input input-sm input-bordered mt-2"
                  />
                  <div className="modal-action w-full">
                    <form
                      method="dialog"
                      className="flex w-full justify-evenly"
                    >
                      <button
                        className="btn btn-success btn-sm flex-grow"
                        onClick={e => {
                          addWorkout(
                            document.getElementById("add-exercise-input").value,
                          );
                          document.getElementById("add-exercise-input").value =
                            "";
                        }}
                      >
                        Add Workout
                      </button>
                      <div className="divider divider-horizontal"></div>
                      <button
                        className="btn btn-error btn-sm flex-grow"
                        onClick={e => {
                          document.getElementById("add-exercise-input").value =
                            "";
                        }}
                      >
                        Cancel
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </>
        )}
      </div>
    </dialog>
  );
}
