let question = document.getElementById('question');
let quizBox = document.getElementById('quiz-box');
let scoreBoard = document.getElementById('scoreboard');
let progressBarFull = document.getElementById("progressBarFull");
let option0 = document.getElementById('option0');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let options = document.getElementsByClassName('option');
let optionList = [option0, option1, option2, option3];
let progress = document.getElementById('progress');
let next = document.querySelector('.next');
let points = document.getElementById('score');
let i = 0;
let score = 0;
let ansChoice = [];
var index = 0;
//function to display questions
function displayQuestion() {
    resetBackGround();
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
    progressBarFull.style.width = `${( i / questionBank.length ) * 100}%`;
}

function resetBackGround() {
    for (var x = 0; x < options.length; x++) {
        options[x].style.background = 'skyblue';
    }
}
//create an array of integers [start..end] in ascending order
function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx);
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
    e = e.currentTarget;
    if (isValidAndAcceptableScore(e)) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'green';
        ansChoice.push(true);
    } else {
        document.getElementById(e.id).style.background = 'red';
        ansChoice.push(false);
    }
    setTimeout(nextQuestion, 300);
}

function isValidAndAcceptableScore(e) {
    return e.innerHTML === questionBank[i]['correct_answer'] && score < questionBank.length;
}
//function to display next question
function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
    } else {
        points.innerHTML = score + '/' + questionBank.length;
        quizBox.style.display = 'none';
        scoreBoard.style.display = 'block';
    }
}
//click events to next button
next.addEventListener('click', nextQuestion);
//Play Again
function playAgain() {
    location.reload();
}
//create table in html using 2Darray tableData
function createTable(tableData, boundingElement) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    table.classList.add('styled-table');

    tableData.forEach(function (rowData) {
        var row = document.createElement('tr');

        rowData.forEach(function (cellData) {
            var cell = document.createElement('td');

            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);
    boundingElement.appendChild(table);
}
//function to check Answers
function makeCorrectAnswerList() {
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreBoard.style.display = 'none';
    var tableData = [];
    for (var a = 0; a < questionBank.length; a++) {
        tableData.push([questionBank[a].question, questionBank[a]['correct_answer'], ansChoice[a] == true ? ' Correct ' : ' Incorrect ']);
    }
    createTable(tableData, answers);
}
// load question on DOM load
let questionBank = [];
let preLoadedQuestions = async () => {
    questionBank = await fetch('https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=multiple')
        .then((response) => response.json())
        .then((response) => response.results)
        .catch((err) => {
            console.error(err);
        });
};
// bind calcScore to options
function bindCalScoreToOptions() {
    for (var x = 0; x < options.length; x++) {
        options[x].addEventListener('click', calcScore);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    preLoadedQuestions().then(() => {
        console.log(questionBank);
        displayQuestion();
        bindCalScoreToOptions();
    });
});