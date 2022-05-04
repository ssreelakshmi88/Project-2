let questionBank = [{
        question: 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
        option: ['Asia', 'Africa', 'Europe', 'Australia'],
        answer: 'Africa'
    },
    {
        question: 'Garampani sanctuary is located at',
        option: ['Junagarh, Gujarat', 'Diphu, Assam', 'Kohima, Nagaland', 'Gangtok, Sikkim'],
        answer: 'Diphu, Assam'
    },
    {
        question: 'For which of the following disciplines is Nobel Prize awarded?',
        option: ['Physics and Chemistry', 'Physiology or Medicine', 'Literature, Peace and Economics', 'All of the above'],
        answer: 'All of the above'
    },
    {
        question: 'Hitler party which came into power in 1933 is known as',
        option: ['Labour Party', 'Nazi Party', 'Ku-Klux-Klan', 'Democratic Party'],
        answer: 'Nazi Party'
    },
    {
        question: 'First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in',
        option: ['1967', '1968', '1958', '1922'],
        answer: '1967'
    }
]

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
let next = document.querySelector('.next');
let points = document.getElementById('score');
let span = document.querySelectorAll('span');
let i = 0;
let score = 0;

//function to display questions
function displayQuestion() {
    for (var x = 0; x < span.length; x++) {
        span[x].style.background = 'none';
    }
    question.innerHTML = 'No.' + (i + 1) + ' ' + questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    progress.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;
    progress.innerText = `Question ${i}/${questionBank.length}`;
    // update progress bar
    progressBarFull.style.width = `${(i / questionBank.length) * 100}%`;

}

//function to calculate scores
function calcScore(e) {
    if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'green';
    } else {
        document.getElementById(e.id).style.background = 'red';
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
function checkAnswer() {
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';
    for (var a = 0; a < questionBank.length; a++) {
        var list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();
calcScore(e);
checkAnswer();