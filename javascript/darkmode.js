const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("openSidebar");
const closeBtn = document.getElementById("closeSidebar");

// Ouvrir la sidebar
openBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

// Fermer la sidebar
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
