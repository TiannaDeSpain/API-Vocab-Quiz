import { getLocalStorage, setLocalStorage, toggleNav } from "./utils.mjs";
let signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("email");
  let password = document.getElementById("pass");
  let name = document.getElementById("name");

  let users = getLocalStorage("creds_db")


  users[email.value] = {"pass":password.value,"name":name.value}
  setLocalStorage("creds_db",users)
  setLocalStorage("currentUser",email.value)
  let base_url = window.location.origin;
  document.location.href = base_url + "/index.html"
}

);
