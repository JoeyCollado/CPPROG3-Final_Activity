
//babaguhin question
//10 questions
//feedback babaguhin
//output
// src code and video

const quizData = [
    {question: "Who created Javascript?", answer: "brendan eich"},
    {question: "What does CSS stand for?", answer: "cascading style sheet"},
    {question: "What is Javascript?", answer: "programming language"},
    {question: "What is Javascript?", answer: "programming language"},
    {question: "What is Javascript?", answer: "programming language"},
    {question: "What is Javascript?", answer: "programming language"},
    {question: "What is Javascript?", answer: "programming language"},
    {question: "What is Javascript?", answer: "programming language"},
    {question: "What is Javascript?", answer: "programming language"},
    {question: "What is Javascript?", answer: "programming language"},
];

let currentQuestionIndex = 0;
let correctAnswered = false;

//
function loadQuestion(){
    document.getElementById("question").textContent = quizData[currentQuestionIndex].question;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").textContent = "";
    document.getElementById("nextBtn").classList.add("hidden");
    correctAnswered = false; // reset 
}

//
function checkAnswer(){
    let userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    let correctAnswer = quizData[currentQuestionIndex].answer;
    let feedback = document.getElementById("feedback");

    if(userAnswer === correctAnswer){
        feedback.innerHTML = "Correct well done!";
        feedback.style.color = "green";
        document.getElementById("nextBtn").classList.remove("hidden");
        correctAnswered = true; // mark as correct
        
    }else{
        feedback.innerHTML = "X Incorrect! try again";
        feedback.style.color = "red";
    }
}

//
function nextQuestion(){
    if(!correctAnswered){
        alert("you must answer correctly before proceeding! (change this soon)")
        return;
    }

    currentQuestionIndex++;
    if(currentQuestionIndex < quizData.length){
        loadQuestion();
    }else{
        document.getElementById("question").textContent = "Well done!";
        document.getElementById("answer").style.display = "none";
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("feedback").textContent = "Congratulations! you finished the quiz"
    }
}

//load first question when it load
loadQuestion();


//stars
document.addEventListener("DOMContentLoaded", function() {
    const numStars = 150;
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.className = "star";
        star.style.width = Math.random() * 6 + "px";
        star.style.height = star.style.width;
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = (Math.random() * 1.5 + 1) + "s";
        document.body.appendChild(star);
    }
});