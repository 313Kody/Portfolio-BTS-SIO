document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const openBtn = document.querySelector(".menu-button");
  const closeBtn = sidebar.querySelector("button");

  // Ouvrir sidebar
  openBtn.addEventListener("click", () => {
    sidebar.classList.add("show");
  });

  // Fermer sidebar
  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show");
  });
});
