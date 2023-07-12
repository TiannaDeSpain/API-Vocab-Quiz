import {
  getLocalStorage,
  setLocalStorage,
  toggleNav
} from "./utils.mjs";
document.querySelector("#menu-icon").onclick = toggleNav;

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
  }
  
  displayScores();