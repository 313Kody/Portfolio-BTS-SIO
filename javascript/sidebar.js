const sidebar = document.getElementById("sidebar");
const btnOpen = document.getElementById("menu-open");
const btnClose = document.getElementById("menu-close");

btnOpen.addEventListener("click", () =>
  sidebar.classList.remove("sidebar-hidden")
);
btnClose.addEventListener("click", () =>
  sidebar.classList.add("sidebar-hidden")
);

// Fermer la sidebar en cliquant sur un lien
document.querySelectorAll("#sidebar a").forEach((link) => {
  link.addEventListener("click", () => sidebar.classList.add("sidebar-hidden"));
});
