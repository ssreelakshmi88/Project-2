let questionContainer = [{
        puzzle: 'What was the destination of the missing flight MH370?',
        choice: ['Kuala Lumpur', 'Beijing', 'Singapore', 'Tokyo'],
        answer: 'Beijing'
    },

    {
        puzzle: 'Who is the founder of &quot;The Lego Group&quot;?',
        choice: ['Gerhardt Kirk Christiansen', 'Kirstine Christiansen', 'Jens Niels Christiansen', 'Ole Kirk Christiansen'],
        answer: 'Ole Kirk Christiansen'
    },
    {
        puzzle: 'What is the last letter of the Greek alphabet?',
        choice: ['Omega', 'Mu', 'Epsilon', 'Kappa'],
        answer: 'Omega'
    },
    {
        puzzle: 'The new One World Trade Center in Manhattan, New York City was designed by which architect? ',
        choice: ['Bjarke Ingels', 'David Childs', 'Michael Arad', 'Fumihiko Maki'],
        answer: 'David Childs'
    },
    {
        puzzle: 'Amsterdam Centraal station is twinned with what station? ',
        choice: ['London Liverpool ', 'Paris Gare du Nord', 'Brussels Midi', 'Frankfurt (Main) Hauptbahnhof'],
        answer: 'London Liverpool '
    },
    {
        puzzle: 'When did the website &quot;Facebook&quot; launch? ',
        choice: ['2005 ', '2003', '2004', '2006'],
        answer: '2004 '
    },
    {
        puzzle: 'Which slogan did the fast food company, McDonald&#039;s, use before their &quot;I&#039;m Lovin&#039; It&quot; slogan?" ',
        choice: ['We Love to See You Smile ', 'Why Pay More!?', 'Have It Your Way', 'Making People Happy Through Food'],
        answer: 'We Love to See You Smile'
    },
    {
        puzzle: 'Which country drives on the left side of the road?',
        choice: ['Germany ', 'Russia', 'Japan', 'China'],
        answer: 'Japan'
    },
    {
        puzzle: 'Which mathematician refused the Fields Medal?',

        choice: ['Grigori Perelman', 'Andrew Wiles', 'Edward Witten', 'Terence Taoa'],
        answer: 'Grigori Perelman'
    },
    {
        puzzle: 'What are the three starter Pokemon available in Pokemon Black and White?',

        choice: ['Snivy, Fennekin, Froakie', 'Snivy, Tepig, Oshawotts', 'Chespin, Tepig, Froakie', 'Chespin, Fennekin, Oshawott'],
        answer: 'Snivy, Tepig, Oshawott'
    }
]

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
    puzzle.innerHTML = 'No.' + (i + 1) + ' ' + questionContainer[i].puzzle;
    choice0.innerHTML = questionContainer[i].choice[0];
    choice1.innerHTML = questionContainer[i].choice[1];
    choice2.innerHTML = questionContainer[i].choice[2];
    choice3.innerHTML = questionContainer[i].choice[3];
}

function calcScore(e) {
    if (e.innerHTML === questionContainer[i].answer && score < questionContainer.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'limegreen';
    } else {
        document.getElementById(e.id).style.background = 'tomato';
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