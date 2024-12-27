let quizCategory = "javascript"
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const submitBtn = document.getElementById("submit-btn")

const getQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || []

    return categoryQuestions
}

function renderQuestion(index) {
    const questionList = getQuestion()
    const currentQuestion = questionList[index]
    const formAns = document.getElementById("form-answer")
    if (!questionList) return
    formAns.replaceChildren()

    console.log(questionList)
    document.getElementById("question").textContent = currentQuestion.question
    document.getElementById("snippet").textContent = currentQuestion.snippet
    currentQuestion.options.forEach((option, index) => {
        const optionContainer = document.createElement("div")
        optionContainer.className = "quiz-option"

        const input = document.createElement("input")
        input.type = "radio"
        input.id = `option${index}`
        input.name = "options"
        input.value = option

        const label = document.createElement("label")
        label.setAttribute("for", `option${index}`)
        label.textContent = option
        optionContainer.appendChild(input)
        optionContainer.appendChild(label)
        formAns.appendChild(optionContainer)
    });

}

renderQuestion(0)

prevBtn.addEventListener("click", () => renderQuestion(0))
nextBtn.addEventListener("click", () => renderQuestion(1))
