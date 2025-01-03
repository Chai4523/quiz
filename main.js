const App = {
  timer: null
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
} 

function getQuestion(quizCategory) {
  const categoryQuestions = questions.find(
    (cat) => cat.category.toLowerCase() === quizCategory.toLowerCase()
  )?.questions;

  return categoryQuestions ?? [];
}

function startTimer(callBackFn) {
  const minEl = document.getElementById("minute")
  const secEl = document.getElementById("second")
  let minute = 5
  let seconds = 0
  const timeLimit = (minute * 60) + seconds
  let currentTime = timeLimit
  
  minEl.textContent = minute.toString()
  secEl.textContent = seconds.toString().length > 1 ? seconds.toString() : "0".concat(seconds.toString())

  clearInterval(App.timer)
  App.timer = setInterval(() => {
    currentTime--
    seconds = currentTime % 60
    minEl.textContent = Math.floor(currentTime/60).toString()
    secEl.textContent = seconds.toString().length > 1 ? seconds.toString() : "0".concat(seconds.toString())

    if (currentTime <= 0) {
      clearInterval(App.timer)
      sessionStorage.setItem("status", "expired");
      callBackFn()
    }
  }, 1000)
}

function renderQuestion(q, qIndex) {
  let answers = JSON.parse(sessionStorage.getItem("answer"));
  let status = sessionStorage.getItem("status")
  const formAns = document.getElementById("form-answer");
  formAns.replaceChildren();

  document.getElementById("question").textContent = q.question;
  document.getElementById("snippet").textContent = q.snippet;

  q.options.forEach((option, index) => {
    const optionContainer = document.createElement("div");
    optionContainer.className = "quiz-option";

    const input = document.createElement("input");
    input.type = "radio";
    input.id = `option${index}`;
    input.name = "options";
    input.value = option;
    input.addEventListener("click", () => {
        answers[qIndex] = index
        sessionStorage.setItem("answer", JSON.stringify(answers));
    })

    const label = document.createElement("label");
    label.setAttribute("for", `option${index}`);
    label.textContent = option;
    input.label = label
    optionContainer.appendChild(input);
    optionContainer.appendChild(label);
    formAns.appendChild(optionContainer);
  });

  if (answers[qIndex] != null) {
    document.getElementById(`option${answers[qIndex]}`).checked = true;
  }

  if (status === "expired") {
    const options = document.querySelector("#form-answer").options

    options.forEach((option, index) => {
      option.disabled = true
    })
  }

  if (status === "complete") {
    const options = document.querySelector("#form-answer").options
    const verdictContainerEl = document.getElementById("explaination-container")
    const verdictEl = document.getElementById("verdict")
    const explainationEl = document.getElementById("explaination")

    options.forEach((option, index) => {
      if (option.checked) {
        if (index === q.answer) {
          verdictEl.textContent = "Correct Answer"
          verdictEl.style.color = "lime"
          option.label.classList.add("correct-option")
        } else {
          verdictEl.textContent = "Wrong Answer"
          verdictEl.style.color = "red"
          option.label.classList.add("incorrect-option")
        }
      }

      if (index === q.answer && !option.classList.contains("correct-option")) {
        if (answers[qIndex] === null) {
          verdictEl.textContent = "Wrong Answer"
          verdictEl.style.color = "red"
          option.label.classList.add("incorrect-option")
        } else {
          option.label.classList.add("correct-option")
        }
      }

      verdictContainerEl.style.display = "block"
      explainationEl.textContent = q.explaination
      option.disabled = true
    })
  }
}

function navigateQuestion(index, questionList) {
  const listLen = questionList.length;
  const timerEl = document.getElementById("timer")
  const prevBtn = document.getElementById("btn-prev");
  const nextBtn = document.getElementById("btn-next");
  const submitBtn = document.getElementById("btn-submit");
  const scoreBtn = document.getElementById("btn-score");
  let status = sessionStorage.getItem("status")
  document.getElementById("question-id").textContent = index + 1;

  if (index < 0 || index >= listLen) return;

  if (index === 0) {
    prevBtn.style.display = "none";
    submitBtn.style.display = "none";
    nextBtn.style.display = "inline-block";
  } else {
    prevBtn.style.display = "inline-block";
    nextBtn.style.display = "inline-block";
    submitBtn.style.display = "none";
    if (index === listLen - 1) {
      nextBtn.style.display = "none";
      submitBtn.style.display = "inline-block";
    }
  }

  if (status === "complete") {
    submitBtn.style.display = "none"
    timerEl.style.display = "none"
    scoreBtn.style.display = "inline-block"
  }
  renderQuestion(questionList[index], index);
}

function submitAnswer(questionList) {
  let ansList = JSON.parse(sessionStorage.getItem("answer"));
  let score = 0

  clearInterval(App.timer)
  sessionStorage.setItem("status", "complete");
  questionList.forEach((question, index) => {
    if (ansList[index] != null && ansList[index] === question.answer) {
      score += 1
    }
  })

  document.getElementById("score").textContent = score
  document.getElementById("score-total").textContent = questionList.length
}

function renderQNA(quizCategory) {
  const timerEl = document.getElementById("timer")
  const landingScreen = document.getElementById("landing-container")
  const scoreScreen = document.getElementById("score-container")
  const qnaScreen = document.getElementById("qna-container")
  const verdictContainerEl = document.getElementById("explaination-container")
  const prevBtn = document.getElementById("btn-prev");
  const nextBtn = document.getElementById("btn-next");
  const submitBtn = document.getElementById("btn-submit");
  const scoreBtn = document.getElementById("btn-score");
  const resetBtn = document.getElementById("btn-reset");
  const reviewBtn = document.getElementById("btn-review");

  let index = 0;
  const questionList = getQuestion(quizCategory);
  const currentQuestion = questionList[index];
  let answers = new Array(questionList.length).fill(null);
  sessionStorage.setItem("answer", JSON.stringify(answers));
  sessionStorage.setItem("status", "ongoing");
  
  
  timerEl.style.display = "flex"
  qnaScreen.style.display = "flex"
  landingScreen.style.display = "none"
  scoreScreen.style.display = "none"
  verdictContainerEl.style.display = "none"
  prevBtn.style.display = "none";
  nextBtn.style.display = "inline-block";
  submitBtn.style.display = "none";
  scoreBtn.style.display = "none";
  document.getElementById("question-id").textContent = index + 1;
  document.getElementById("question-size").textContent = questionList.length;

  console.log(questionList);

  renderQuestion(currentQuestion, index);
  startTimer(() => {renderQuestion(questionList[index], index)})

  nextBtn.addEventListener("click", () => {
    navigateQuestion(index + 1, questionList);
    index += 1;
  });

  prevBtn.addEventListener("click", () => {
    navigateQuestion(index - 1, questionList);
    index -= 1;
  });

  submitBtn.addEventListener("click", () => {
    submitAnswer(questionList)
    scoreScreen.style.display = "flex"
    qnaScreen.style.display = "none"
  })

  reviewBtn.addEventListener("click", () => {
    index = 0
    navigateQuestion(index, questionList)
    scoreScreen.style.display = "none"
    qnaScreen.style.display = "flex"
  })

  resetBtn.addEventListener("click", () => {
    qnaScreen.style.display = "flex"
    renderQNA(quizCategory)
  })

  scoreBtn.addEventListener("click", () => {
    scoreScreen.style.display = "flex"
    qnaScreen.style.display = "none"
  })
}

function main() {
  const landingScreen = document.getElementById("landing-container")
  const qnaScreen = document.getElementById("qna-container")
  const scoreScreen = document.getElementById("score-container")
  const startBtn = document.getElementById("btn-start");
  const categoryEl = document.getElementById("test-category")
  const sizeEl = document.getElementById("test-size")
  const timeEl = document.getElementById("test-time")
  const navItems = document.querySelectorAll(".nav-item")

  let quizCategory = "javascript";

  qnaScreen.style.display = "none"
  scoreScreen.style.display = "none"
  landingScreen.style.display = "flex"
  categoryEl.textContent = capitalizeFirstLetter(quizCategory)
  sizeEl.textContent = getQuestion(quizCategory).length
  timeEl.textContent = getQuestion(quizCategory).length.toString().concat(" minutes")

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navItems.forEach(navItem => {
        navItem.classList.remove("nav-active")
      })
      item.classList.add("nav-active")

      qnaScreen.style.display = "none"
      scoreScreen.style.display = "none"
      landingScreen.style.display = "flex"
      quizCategory = item.textContent.toLowerCase()
      categoryEl.textContent = item.textContent
      sizeEl.textContent = getQuestion(quizCategory).length
      timeEl.textContent = getQuestion(quizCategory).length.toString().concat(" minutes")
    })
  })
  
  startBtn.addEventListener("click", () => {
    renderQNA(quizCategory);
  })
}

main();