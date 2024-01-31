import Counter from "./Counter";
import Workout from "./Workout";
import Error from "../Error";
import {
  updateWorkoutNotes,
  updateWorkoutSets,
  addWorkout,
  removeWorkout,
} from "./helper/updateWorkout";

export default function WorkoutRoutine({
  currentTemplate,
  setCurrentTemplate,
  workouts,
  setWorkoutsProp,
  count,
  setCount,
  isActive,
  setIsActive,
}) {
  return (
    <dialog id="workout-routing-modal" className="modal modal-bottom">
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[555px]">
        <Error
          errorText={"You need to have at least one workout per routine!!"}
          id={"one_workout_per_routine"}
        />
      </div>
      <div className="modal-box w-screen h-screen">
        <form method="dialog" className="flex justify-between">
          <Counter count={count} setCount={setCount} isActive={isActive} />
          <div>
            <button
              className="btn btn-sm btn-info mr-2"
              onClick={() => {
                setCurrentTemplate(null);
                setIsActive(false);
                setCount(0);
              }}
            >
              Finish
            </button>
            <button
              className="btn btn-sm btn-error"
              onClick={() => {
                setCurrentTemplate(null);
                setWorkoutsProp([]);
                setIsActive(false);
                setCount(0);
              }}
            >
              Cancel
            </button>
          </div>
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
                updateSets={newSets =>
                  updateWorkoutSets(index, newSets, workouts, setWorkoutsProp)
                }
                updateNotes={newNotes =>
                  updateWorkoutNotes(index, newNotes, workouts, setWorkoutsProp)
                }
                removeWorkout={() =>
                  removeWorkout(index, workouts, setWorkoutsProp)
                }
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
                          const workoutName =
                            document.getElementById("add-exercise-input").value;
                          addWorkout(workoutName, workouts, setWorkoutsProp);
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
