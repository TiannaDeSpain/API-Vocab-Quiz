import { getLocalStorage, setLocalStorage, toggleNav } from "./utils.mjs";
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("email");
  let password = document.getElementById("pass");

  let users = getLocalStorage("creds_db")

  console.log(users[email.value])

  if (users[email.value]["pass"] == password.value) {
  // if (true) {
    setLocalStorage("currentUser",email.value)
    let base_url = window.location.origin;
    document.location.href = base_url + "/index.html"
  }else{
    alert("That email and password don't exist, try again")
  }

  }

);
