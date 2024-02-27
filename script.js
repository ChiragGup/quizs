let questions = [
    {
    question: "Who heads the RBI?",
    answers: [
    {text: "prime-minister", correct: false},
    {text: "governer", correct: true},
    {text: "rbi", correct: false},
    {text: "prime", correct: false},
    ]
},
{
    question: "How many days are there in a week?",
    answers: [
    {text: "5 days", correct: false},
    {text: "4 days", correct: false},
    {text: "7 days", correct: true},
    {text: "none", correct: false},
    ]
}
]

let questionMake = document.getElementById("question");
let answerBtn = document.getElementById("answer-button");
let nextBtn = document.getElementById("next-btn");

let questionIndex = 0;
let score = 0;


function startQuiz() {
    questionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuiz();
}

function showQuiz() {
    resetState()
    let currentQuestion = questions[questionIndex];
    let currentQuestionNo = questionIndex + 1;
    // Add your logic to display the current question and number
    questionMake.innerHTML = currentQuestionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer =>{
        let button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerBtn.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectedAnswer);

    })
}

function resetState(){
    nextBtn.style.display = "none"
    answerBtn.innerHTML = ""

}

function selectedAnswer(e){
    let selectBtn = e.target
let isCorrect = selectBtn.dataset.correct === "true"
    if(isCorrect){
        selectBtn.classList.add("correct")
        score++
    }
    else(
        selectBtn.classList.add("incorrect") 
    )

   Array.from(answerBtn.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct")
        }
        button.disabled = true
        
    })
    nextBtn.style.display = "block"
}

function showScore(){
    resetState()
    questionMake.innerHTML = `You scored ${score} out of ${questions.length}`;

    nextBtn.innerHTML = "play again"  
    nextBtn.style.display = "block"
}

nextBtn.addEventListener("click", ()=>{
    if(questionIndex<questions.length){
handleNext()
    }
    else{
        startQuiz()
    }
})

function handleNext() {
    questionIndex++;

    if (questionIndex < questions.length) {
        showQuiz();
    } else {
        showScore();
    }
}






// Call startQuiz to initialize the quiz
startQuiz();

