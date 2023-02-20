const modeBtn = document.querySelector(".mode__switch");
const lightIcon = document.querySelector(".light__mode");
const darkIcon = document.querySelector(".dark__mode");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkIcon.classList.add("hidden");
    lightIcon.classList.remove("hidden");
  } else {
    darkIcon.classList.remove("hidden");
    lightIcon.classList.add("hidden");
  }
});
