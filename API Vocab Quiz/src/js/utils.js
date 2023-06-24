export function toggleNav() {
  var updateElement = document.getElementById("menu-icon");
  var sidebar = document.getElementById("sidebar");
  updateElement.classList.toggle("open");
  sidebar.classList.toggle("open");
}
