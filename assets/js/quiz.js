let questionContainer = fetch('https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple').then(response => response.json())


let puzzleContainer = document.getElementById('puzzle-container');
let puzzle = document.getElementById('puzzles');
let choice0 = document.getElementById('choice0');
let choice1 = document.getElementById('choice1');
let choice2 = document.getElementById('choice2');
let choice3 = document.getElementById('choice3');
let next = document.querySelector('.next');
var score = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

function displayPuzzle() {
    for (let x = 0; x < span.length; x++) {
        span[x].style.background = 'none';
    }
    puzzle.innerHTML = 'No.' + (i + 1) + ' ' + questionContainer[i].puzzle;
    choice0.innerHTML = questionContainer[i].choice[0];
    choice1.innerHTML = questionContainer[i].choice[1];
    choice2.innerHTML = questionContainer[i].choice[2];
    choice3.innerHTML = questionContainer[i].choice[3];
}

function calcScore(e) {
    if (e.innerHTML === questionContainer[i].answer && score < questionContainer.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'green';
    } else {
        document.getElementById(e.id).style.background = 'red';
    }
}

function nextPuzzle() {
    if (i < questionContainer.length - 1) {
        i = i + 1;
        displayPuzzle();
    } else {
        score.innerHTML = score + '/' + questionContainer.length
        puzzleContainer.style.display = 'none';
    }
}
next.addEventListener('click', nextPuzzle);

function backToQuiz() {
    location.reload();
}

function checkAnswer() {
    let answerContainer = document.getElementById('answer-container');
    let answers = document.getElementById('answers');
    answerContainer.style.display = 'block'
    for (let a = 0; a < questionContainer.length; a++) {
        let list = document.createElement('li');
        list.innerHTML = questionContainer[a].answer;
        answers.appendChild(list);
    }
}
displayPuzzle();