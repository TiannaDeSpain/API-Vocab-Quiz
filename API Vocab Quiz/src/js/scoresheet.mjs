import {
  getLocalStorage,
  setLocalStorage,
  toggleNav
} from "./utils.mjs";
document.querySelector("#menu-icon").onclick = toggleNav;

let base_url = window.location.origin;

function displayScores() {
    const scoreSheet = document.getElementById("scoreSheet");
    const listOfScores = localStorage.getItem("listOfScores");
    if (listOfScores) {
      const scores = JSON.parse(listOfScores);
  
      scores.forEach((score) => {
        const scoreElement = document.createElement("p");
        scoreElement.classList.add("score-entry");
        scoreElement.innerHTML = `<span class="score-value">Score: ${score.score}</span><span class="score-date"> ${score.date}</span>`;
        scoreSheet.appendChild(scoreElement);
      });
    }
    else{
      let h = document.getElementById("resultHeader");
      h.innerHTML = "Play a round of the quiz and save your results. Then check back here!";
      e.innerHTML = "Try the Quiz"
      e.addEventListener("click", function () {
        e.setAttribute("href", document.location.href = base_url + "/quiz.html")
      })
    }
  }
  
let creds_db;
let currentUser;
try {
  creds_db = getLocalStorage("creds_db");
  currentUser = localStorage.getItem("currentUser");
} catch (error) {
  console.error("Error retrieving from local storage:", error);
}
  let e = document.getElementById("erase");
  e.addEventListener("click", function () {
    creds_db[currentUser]["scores"] = []
    setLocalStorage("listOfScores", [])
    e.setAttribute("href", document.location.href = base_url + "/results.html")
    }
  )

  displayScores();