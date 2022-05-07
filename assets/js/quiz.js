let question = document.getElementById('question');
let quizBox = document.getElementById('quiz-box');
let scorecard = document.getElementById('scorecard');
let scoreBoard = document.getElementById('scoreboard');
let progressText = document.getElementById("progressText");
let progressBarFull = document.getElementById("progressBarFull");
let option0 = document.getElementById('option0');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let optionList = [option0, option1, option2, option3];
let next = document.querySelector('.next');
let points = document.getElementById('score');
let span = document.querySelectorAll('span');
let i = 0;
let score = 0;
let ansChoice = [];


//function to display questions
function displayQuestion() {
    for (var x = 0; x < span.length; x++) {
        span[x].style.background = 'none';
    }
    question.innerHTML = '#' + (i + 1) + ' ' + questionBank[i].question;
    //generate array of random integers from 0 to 3
    var ranArray = getRandomInt(optionList.length - 1);
    var answers = [questionBank[i].correct_answer].concat(questionBank[i].incorrect_answers);
    console.log(answers);

    //loop to fill options with random answers
    for (index = 0; index < optionList.length; index++) {
        optionList[index].innerHTML = answers[ranArray[index]];

    }
    // Progress bar text updation
    progress.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;
    progress.innerText = `Question ${i}/${questionBank.length}`;
    progressBarFull.style.width = `${(i / questionBank.length) * 100}%`;

}
//create an array of integers [start..end] in ascending order
function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
//generate array of random non-repetetive integers from 0 to max
function getRandomInt(max) {
    var nums = range(0, max),
        ranNums = [],
        idx = nums.length,
        j = 0;
    while (idx--) {
        j = Math.floor(Math.random() * (idx + 1));
        ranNums.push(nums[j]);
        nums.splice(j, 1);
    }
    console.log(ranNums);
    return ranNums;
}

//function to calculate scores
function calcScore(e) {
    console.log(`E: ${e}`);
    console.log(`E CONTENTS: ${e.innerHTML}`);
    console.log(`QUESTION: ${questionBank[i]['correct_answer']}`);
    if (e.innerHTML === questionBank[i]['correct_answer'] && score < questionBank.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'green';
        ansChoice.push(true);
    } else {
        document.getElementById(e.id).style.background = 'red';
        ansChoice.push(false);
    }
    setTimeout(nextQuestion, 300);
}

//function to display next question
function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
    } else {
        points.innerHTML = score + '/' + questionBank.length;
        quizBox.style.display = 'none';
        scoreboard.style.display = 'block'
    }
}

//click events to next button
next.addEventListener('click', nextQuestion);

//Play Again
function playAgain() {
    location.reload();
}

//function to check Answers
function makeCorrectAnswerList() {
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';
    for (var a = 0; a < questionBank.length; a++) {
        var list = document.createElement('li');
        list.innerHTML = questionBank[a]['correct_answer'];
        if (ansChoice[a]) {
            list.style.backgroundColor = 'limegreen';
        } else {

            list.style.backgroundColor = 'tomato';
        }

        answers.appendChild(list);
    }
}

// load question on DOM load
let questionBank = []
let preLoadedQuestions = async () => {
    questionBank = await fetch('https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=multiple')
        .then((response) => response.json())
        .then((response) => response.results)
        .catch((err) => {
            console.error(err);
        });

}
document.addEventListener('DOMContentLoaded', () => {
    preLoadedQuestions().then(() => {
        console.log(questionBank);
        displayQuestion();

    });
});