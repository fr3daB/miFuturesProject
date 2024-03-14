const questionData = [
    {
        question: "Coronavirus disease (COVID-19) is an infectious disease caused by a new virus.",
        answer: true,
        image: "../assets/padlock.png"
    },
    {
        question: "The Earth is flat.",
        answer: false,
        image: "../assets/dice_icon.png"
    },
    {
        question: "Apples are a type of fruit.",
        answer: true,
        image: "../assets/gitlab.png"
    }
];

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
        showPopup(`You have completed the quiz! You got ${correctAnswers.filter(Boolean).length} out of ${questionData.length} questions correct.`);
        localStorage.setItem("format", "multiple");
        localStorage.setItem("score", [correctAnswers.filter(Boolean).length, questionData.length]);
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