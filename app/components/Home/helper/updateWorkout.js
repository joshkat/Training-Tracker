function updateWorkoutSets(workoutIndex, newSets, workouts, setWorkoutsProp) {
  const updatedWorkouts = [...workouts];
  updatedWorkouts[workoutIndex] = {
    ...updatedWorkouts[workoutIndex],
    sets: newSets,
  };
  setWorkoutsProp(updatedWorkouts);
}

function updateWorkoutNotes(workoutIndex, newNotes, workouts, setWorkoutsProp) {
  const updatedWorkouts = [...workouts];
  updatedWorkouts[workoutIndex] = {
    ...updatedWorkouts[workoutIndex],
    notes: newNotes,
  };
  setWorkoutsProp(updatedWorkouts);
}

function addWorkout(workoutName, workouts, setWorkoutsProp) {
  const updatedWorkouts = [...workouts];
  updatedWorkouts.push({
    name: workoutName,
    sets: [],
    notes: "",
  });
  setWorkoutsProp(updatedWorkouts);
}

function removeWorkout(workoutIndex, workouts, setWorkoutsProp) {
  if (workouts.length === 1) {
    document
      .getElementById("one_workout_per_routine")
      .classList.toggle("hidden");
    return;
  }
  const updatedWorkouts = workouts.filter((_, index) => index !== workoutIndex);
  setWorkoutsProp(updatedWorkouts);
}

export { updateWorkoutSets, updateWorkoutNotes, addWorkout, removeWorkout };
