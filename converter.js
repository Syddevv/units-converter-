// INCHES TO CM
document.querySelector(".convert-btn").addEventListener("click", () => {
  const inch = document.querySelector(".from-input").value;

  const result = inch * 2.54;

  document.querySelector(".to-input").value = `${result.toFixed(2)} cm`;
});

// CLEAR BUTTON
document.querySelector(".clear-btn").addEventListener("click", () => {
  document.querySelector(".to-input").value = "";
  document.querySelector(".from-input").value = "";
});

// CM TO INCHES
document
  .querySelector(".convert-btn-cm-inches")
  .addEventListener("click", () => {
    const cm = document.querySelector(".from-input").value;

    const result = cm / 2.54;
    document.querySelector(".to-input").value = `${result.toFixed(2)} inches`;
  });

document.querySelectorAll(".choices a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior

    // Add hidden class to body for transition
    document.body.classList.add("hidden");

    // Wait for the transition to finish before navigating
    setTimeout(() => {
      window.location.href = this.href; // Navigate to the new page
    }, 500); // Match this time with the CSS transition duration
  });
});

// Optionally remove the 'hidden' class when the page loads
window.addEventListener("load", () => {
  document.body.classList.remove("hidden");
});
