const themeBtn = document.getElementById("theme-switch");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("bg-slate-900");
  document.body.classList.toggle("text-white");
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");
  // Optionnel : stocker le choix
  const isDark = document.body.classList.contains("bg-slate-900");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
