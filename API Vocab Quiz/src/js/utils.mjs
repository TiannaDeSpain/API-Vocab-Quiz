export function toggleNav() {
  var updateElement = document.getElementById("menu-icon");
  var sidebar = document.getElementById("sidebar");
  updateElement.classList.toggle("open");
  sidebar.classList.toggle("open");
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}


// async function convertToJson(res) {
//   const data = await res.json();
//   if (res.ok) {
//     return data;
//   } else {
//     throw {
//       name: "servicesError",
//       message: data
//     };
//   }
// }