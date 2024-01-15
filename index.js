
//Use objects to create a simple quiz game that scores players and displays scores at the end.

let name = prompt("Enter your name ")

if (name) {
    alert(`hi ${name}, let's begin with the quiz`);
}

const quizQuestions = [
    'Is null and undefined same?\n Options: 1- yes, 2- no',
    'what is the datatype of 9?\n Options: 1- string, 2- number, 3- object, 4-null',
    'is == and === equal?\n Options: 1- yes, 2- no',
    `Which of the following is not a valid JavaScript variable name?\n Options: 1- myVariable1, 2- $variable1, 3- 3variable1, 4- _variable`,
    `Is javascript an interpreted language?\n Options: 1- yes, 2- no`
];

const correctAnswers = [
    'no',
    'number',
    'no',
    `3variable1`,
    `yes`
];

function getUserAns() {
    const userAnswers = [];

    for (let i = 0; i < quizQuestions.length; i++) {
        const ans = prompt(quizQuestions[i]); // Display each question
        userAnswers.push(ans);
    }

    return userAnswers;
}

let userAns = getUserAns();

function checkAnswers(quizQuestions, correctAnswers, userAns, name) {
    let total = 0;
    for (let i = 0; i < quizQuestions.length; i++) {
        if (correctAnswers[i] === userAns[i]) {
            total++;
        }
    }
    return `hey ${name}, your score is ${total} out of ${quizQuestions.length}`;
}

let result = checkAnswers(quizQuestions, correctAnswers, userAns, name);

alert(`hey ${name}, your answers are ${userAns}`)
alert(result); // Display the result 