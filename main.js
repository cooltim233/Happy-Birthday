const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Move "No" button on hover
btnNo.addEventListener("mouseover", () => {
  const btnHeight = btnNo.offsetHeight;
  const btnWidth = btnNo.offsetWidth;

  const newTop = getRandomNumber(0, window.innerHeight - btnHeight - 20);
  const newLeft = getRandomNumber(0, window.innerWidth - btnWidth - 20);

  btnNo.style.position = "fixed"; // Lock position style
  btnNo.style.top = `${newTop}px`;
  btnNo.style.left = `${newLeft}px`;
  btnNo.style.width = "auto"; // Reset width to prevent stretching
  btnNo.style.height = "auto";
});

// Prevent clicking from causing glitches
btnNo.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  return false;
});

// Show "Yes" result
btnYes.addEventListener("click", () => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
});
