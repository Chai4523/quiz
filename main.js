const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");

function getQuestion(quizCategory) {
  const categoryQuestions =
    questions.find(
      (cat) => cat.category.toLowerCase() === quizCategory.toLowerCase()
    ).questions || [];

  return categoryQuestions;
}

function renderQuestion(q) {
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

    const label = document.createElement("label");
    label.setAttribute("for", `option${index}`);
    label.textContent = option;
    optionContainer.appendChild(input);
    optionContainer.appendChild(label);
    formAns.appendChild(optionContainer);
  });
}

function navigateQuestion(index, questionList) {
  const listLen = questionList.length;
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
  renderQuestion(questionList[index]);
}

function renderQNA() {
  let quizCategory = "javascript";
  let index = 0;
  const questionList = getQuestion(quizCategory);
  const currentQuestion = questionList[index];
  prevBtn.style.display = "none";
  submitBtn.style.display = "none";
  document.getElementById("question-id").textContent = index + 1;

  console.log(questionList);

  renderQuestion(currentQuestion);

  nextBtn.addEventListener("click", () => {
    navigateQuestion(index + 1, questionList);
    index += 1;
  });

  prevBtn.addEventListener("click", () => {
    navigateQuestion(index - 1, questionList);
    index -= 1;
  });
}

renderQNA();
