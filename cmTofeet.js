// CM TO FEET
document.querySelector(".convert-btn-cm-feet").addEventListener("click", () => {
  const cm = document.querySelector(".from-input").value;

  const result = cm / 30.48;
  document.querySelector(".to-input").value = `${result.toFixed(3)} feet`;
});

// CLEAR BUTTON
document.querySelector(".clear-btn").addEventListener("click", () => {
  document.querySelector(".to-input").value = "";
  document.querySelector(".from-input").value = "";
});
