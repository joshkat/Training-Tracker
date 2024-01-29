function disableButtons() {
  // all buttons with this class will be disabled
  const buttons = document.querySelectorAll(".to-disable");
  buttons.forEach(btn => {
    btn.classList.add("disabled");
    btn.classList.add("btn-disabled");
  });
}

export { disableButtons };
