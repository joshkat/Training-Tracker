function ensureNonEmptyInputs(e, workoutList) {
  const templateName = document.querySelectorAll("#add-template-modal input")[0]
    .value;

  if (templateName === "") {
    e.preventDefault();
    document.getElementById("name_required").classList.toggle("hidden");
    return false;
  }
  if (workoutList.size === 0) {
    e.preventDefault();
    document.getElementById("at_least_one_workout").classList.toggle("hidden");
    return false;
  }
  return true;
}

export { ensureNonEmptyInputs };
