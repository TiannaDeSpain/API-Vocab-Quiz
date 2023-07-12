import { getLocalStorage, setLocalStorage, toggleNav } from "./utils.mjs";

let creds_db;
try {
  creds_db = getLocalStorage("creds_db");
} catch (error) {
  console.error("Error retrieving from local storage:", error);
}

if (!creds_db) {
  creds_db = {};
  setLocalStorage("creds_db", JSON.stringify(creds_db));
}

let signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("email");
  let password = document.getElementById("pass");
  let name = document.getElementById("name");

  let users = getLocalStorage("creds_db");

  // Check if the email already exists in creds_db
  if (users && users[email.value]) {
    // Handle the error: Email already exists
    alert("Error: Email already exists. Please choose a different email.");
    return;
  }

  users[email.value] = { pass: password.value, name: name.value };
  setLocalStorage("creds_db", JSON.stringify(users));
  setLocalStorage("currentUser", email.value);
  let base_url = window.location.origin;
  document.location.href = base_url + "/index.html";
});
