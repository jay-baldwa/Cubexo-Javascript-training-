
//Develop a simple interactive quiz that asks and checks the user's responses about data types.

let name = prompt("Enter your name ")

if (name) {
    alert(`hi ${name}, let's begin with the quiz`);
}

const quizQuestions = [
    'Is null and undefined same?\n Options: 1- yes, 2- no',
    'what is the datatype of 9?\n Options: 1- string, 2- number, 3- object, 4-null',
    'is == and === equal?\n Options: 1- yes, 2- no'
];

const correctAnswers = [
    'no',
    'number',
    'no'
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