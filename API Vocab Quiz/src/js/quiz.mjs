import words from "../json/words.json";

const baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";



function randomWord() {
  var vocabWord = words[Math.floor(Math.random() * words.length)];
//   console.log(vocabWord);
  return vocabWord;
}

async function getVocabInfo(vocabWord) {
  let response = await fetch(baseURL + `${vocabWord}`);
  var data = await response.json();
  return data;
}

export async function makeQuestion() {
  let word = randomWord();
  let wordInfo = await getVocabInfo(word);
  let question = wordInfo[0].meanings[0].definitions[0].definition;
  let answers = [word];
  answers.push(randomWord());
  answers.push(randomWord());
  answers.push(randomWord());
  answers.sort();
  let correctAnswer = answers.indexOf(word);
  question = {
    answers: answers,
    question: question,
    word: word,
    correctAnswer: correctAnswer,
  };
  return question;
}

export async function quizTemplate() {
  let i;
  for (i = 0; i < 3; i++) {
    let q = await makeQuestion();
    const quizContainer = document.getElementById("quiz");
    const definition = document.createElement("h4");
    // console.log(q);
    definition.innerHTML = `${q.question}`;
    quizContainer.appendChild(definition);
    q.answers.forEach((answer) => {
      const a = document.createElement("input");
      a.type = "radio";
      a.name = `${q.word}`;
      a.value = `${answer}`;
      a.setAttribute("id", `${answer}`);
      const b = document.createElement("label");
      const c = document.createElement("br");
      b.htmlFor = `${answer}`;
      b.innerHTML = `${answer}`;
      quizContainer.appendChild(a);
      quizContainer.appendChild(b);
      quizContainer.appendChild(c);
    });
  }
}

let points = 0;
export async function quizScoring() {
  let radioButtons = [];
  radioButtons = document.querySelectorAll("input[type=radio]");
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      if (radioButton.name === radioButton.value) {
        points += 1;
      }
    }
  }
  return points;
}

export function scoring() {
  const btn = document.querySelector("#submit");
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    let score = await quizScoring();
    let dateTime = getFormattedDateTime();
    localStorage.setItem("score", score);
    localStorage.setItem("submitTime", dateTime);

    // Append score to the DOM
    let scoreLocation = document.getElementById("scoreLocation");
    scoreLocation.textContent = score;

    // Show the popup
    const myPopup = document.getElementById("myPopup");
    myPopup.classList.add("show");
  });

  const close = document.getElementById("closePopup");
  const save = document.getElementById("saveScore");
  close.addEventListener("click", function () {
    const myPopup = document.getElementById("myPopup");
    myPopup.classList.remove("show");
    localStorage.removeItem("score");
    location.reload();
  });
  save.addEventListener("click", function () {
    const score = localStorage.getItem("score");
    const date = localStorage.getItem("submitTime");
    let listOfScores = localStorage.getItem("listOfScores");
    if (listOfScores) {
      listOfScores = JSON.parse(listOfScores);
      listOfScores.push({ score, date });
    } else {
      listOfScores = [{ score, date }];
    }
    localStorage.setItem("listOfScores", JSON.stringify(listOfScores));
    location.reload();
  });
  window.addEventListener("click", function (event) {
    const myPopup = document.getElementById("myPopup");
    if (event.target == myPopup) {
      myPopup.classList.remove("show");
    }
  });
}

function getFormattedDateTime() {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const dateTime = new Date().toLocaleString(undefined, options);
  return dateTime;
}
