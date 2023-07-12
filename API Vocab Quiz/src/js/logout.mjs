import { toggleNav, setLocalStorage, getLocalStorage } from "./utils.mjs";

let listOfScores;
let creds_db;
let currentUser;
try {
  creds_db = getLocalStorage("creds_db");
  currentUser = localStorage.getItem("currentUser");
  listOfScores = getLocalStorage("listOfScores");
} catch (error) {
  console.error("Error retrieving from local storage:", error);
}

if (creds_db && currentUser && listOfScores) {
  // Check if the currentUser exists in creds_db
  if (creds_db[currentUser]) {
    // Update the scores for the currentUser
    creds_db[currentUser].scores = listOfScores;
    setLocalStorage("creds_db", JSON.stringify(creds_db));
  }
}

setLocalStorage("currentUser", undefined);
localStorage.removeItem("listOfScores");
