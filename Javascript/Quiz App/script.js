let currentQuestionIndex = 0;
let score = 0;
let Questions =
  [
    {
      Question: "What is the Capital of France?",
      Answers: [
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Paris", correct: true },
        { text: "Lisbon", correct: false }
      ]
    },
    {
      Question: "Which Language Runs in a Web Browser?",
      Answers: [
        { text: "Python", correct: false },
        { text: "Javascript", correct: true },
        { text: "C++", correct: false },
        { text: "Java", correct: false }
      ]
    },
    {
      Question: "What does HTML Stand for?",
      Answers:
        [
          { text: "HyperText Markup Language", correct: true },
          { text: "Hyper TransferMarkup Language", correct: false },
          { text: "HighText Machine Language", correct: false },
          { text: "Hyperlink Text Markup Language", correct: false }
        ]
    },
  ];
let questiontext = document.getElementById("question");
let answerbuttons = document.getElementById("answer-buttons");
let nextbutton = document.getElementById("next-button");
let resultsection = document.getElementById("result");
function showQuestion() {
  answerbuttons.innerHTML = "";
  let currentQuestion = Questions[currentQuestionIndex];
  questiontext.innerHTML = currentQuestion.Question
  currentQuestion.Answers.forEach(answer => {
    let button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answerbuttons.appendChild(button);
  });

  nextbutton.style.display = "none";
}

function selectAnswer(event) {
  let selectedButton = event.target;
  let isCorrect = selectedButton.dataset.correct === "true";

  if (isCorrect) {
    selectedButton.style.backgroundColor = "green";
    score++;
  } else {
    selectedButton.style.backgroundColor = "red";
  }
  Array.from(answerbuttons.children).forEach(button => {
    button.disabled = true;
  });

  nextbutton.style.display = "block";
}
nextbutton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < Questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});
function showResult() {
  resultsection.innerHTML = `<h2>Your Score: ${score} / ${Questions.length}</h2>`;
  resultsection.style.display = "block";
  nextbutton.style.display = "none";
}
showQuestion();

