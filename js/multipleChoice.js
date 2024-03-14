const questionData1 = [
    {
        question: "Solving a jigsaw puzzle involves recognizing patterns and shapes, which can enhance cognitive abilities.",
        answer: true,
        image: "../assets/padlock.png"
    },
    {
        question: "True/False: Solving a jigsaw puzzle involves recognizing patterns and shapes, which can enhance cognitive abilities.",
        answer: true,
        image: "../assets/dice_icon.png"
    },
    {
        question: "Progressing through levels of a maze involves problem-solving and can improve spatial awareness.",
        answer: true,
        image: "../assets/gitlab.png"
    }
];

const questionData2 = [
    {
        question: "Solving a crossword puzzle requires vocabulary and word association skills, which can be developed over time.",
        answer: true,
        image: "../assets/padlock.png"
    },
    {
        question: "Learning to solve a complex magic square involves understanding number patterns and can enhance mathematical skills.",
        answer: true,
        image: "../assets/dice_icon.png"
    },
    {
        question: "Solving a maze always follows a linear path without any alternate routes.",
        answer: false,
        image: "../assets/gitlab.png"
    }
];

var questionData;

switch (localStorage.getItem("mc")) {
    case "1":
        questionData = questionData1;
        break;
    case "2":
        questionData = questionData2;
        break;
}

let currentQuestionIndex = 0;
const questionCount = document.querySelector('.question-count');
const questionText = document.getElementById('question-text');
const questionImage = document.getElementById('question-image');
const trueButton = document.querySelector('.true');
const falseButton = document.querySelector('.false');
const correctAnswers = [];
const popupOverlay = document.getElementById('popup-overlay');
const popupMessage = document.getElementById('popup-message');
const popupClose = document.getElementById('popup-close');
const progressFill = document.getElementById('progress-fill');
const timerDisplay = document.getElementById('timer-display');

const quizDuration = 1 * 60; // 5 minutes in seconds
let quizTimer;
const timerEnabled = true; // Change to false to disable the timer

function displayQuestion() {
    const currentQuestion = questionData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    questionImage.src = currentQuestion.image;
    questionCount.textContent = `Question ${currentQuestionIndex + 1}/${questionData.length}`;
    updateProgressBar();
}

function updateProgressBar() {
    const progressPercentage = ((currentQuestionIndex + 1) / questionData.length) * 100;
    progressFill.style.width = `${progressPercentage}%`;
}

function showPopup(message) {
    popupMessage.textContent = message;
    popupOverlay.style.display = 'flex';
    clearInterval(quizTimer); // Stop the timer when the quiz ends
}

function hidePopup() {
    popupOverlay.style.display = 'none';
}

function checkAnswer(userAnswer) {
    const currentQuestion = questionData[currentQuestionIndex];
    const isCorrect = userAnswer === currentQuestion.answer;
    correctAnswers.push(isCorrect);

    currentQuestionIndex++;

    if (currentQuestionIndex < questionData.length) {
        displayQuestion();
    } else {
        localStorage.setItem("format", "multiple");
        localStorage.setItem("score", [correctAnswers.filter(Boolean).length, questionData.length]);
        localStorage.setItem("l1", JSON.parse(localStorage.getItem("l1")) + 1);
        setTimeout(function() {location.href='../html/gameEnd.html';}, 555)
    }
}

function startTimer() {
    let timeRemaining = quizDuration;
    quizTimer = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeRemaining === 0) {
            clearInterval(quizTimer);
            showPopup('Time is up! Quiz has ended.');
            localStorage.setItem("format", "multiple");
            localStorage.setItem("score", [correctAnswers.filter(Boolean).length, questionData.length]);
            localStorage.setItem("l1", JSON.parse(localStorage.getItem("l1")) + 1);
            setTimeout(function() {location.href='../html/gameEnd.html';}, 555)
        }

        timeRemaining--;
    }, 1000);
}

trueButton.addEventListener('click', () => checkAnswer(true));
falseButton.addEventListener('click', () => checkAnswer(false));
popupClose.addEventListener('click', hidePopup);

displayQuestion();
if (timerEnabled) {
    startTimer();
}