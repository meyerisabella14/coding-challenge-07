// Coding Challenge 07
// Small Business Website: Dynamic CTA Update

const headlineInput = document.getElementById("headlineInput");
const updateButton = document.getElementById("updateButton");
const ctaHeadline = document.getElementById("ctaHeadline");

updateButton.addEventListener("click", function() {
  const newHeadline = headlineInput.value;

  if (newHeadline.trim() !== "") {
    ctaHeadline.textContent = newHeadline;
    headlineInput.value = "";
  } else {
    alert("Please enter a new headline.");
  }
});
