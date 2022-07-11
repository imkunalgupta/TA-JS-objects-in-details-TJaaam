
// Whithout object
/** 
let title = 'Where is the capital of India';
let options = ['Mumbai', 'Colombo', 'New Delhi', 'Newyork'];
let correctAnswerIndex = 2;
function getCorrectAnswer() {
    return options[correctAnswerIndex];
}
function isAnswerCorrect (index) {
    return index === correctAnswerIndex;
}
*/

//Organize using object
/** 
let quizDemo = {
    title: 'Where is the capital of India',
    options: ['Mumbai', 'Colombo', 'New Delhi', 'Newyork'],
    correctAnswerIndex: 2,
    getCorrectAnswer() {
        return quizDemo.options[quizDemo.correctAnswerIndex];
    },
    isAnswerCorrect (index) {
        return index === quizDemo.correctAnswerIndex;
    },
};
*/

// Use a function to create object
/**
function quiz (title, options, correctAnswer) {
    let quizDemo = {};
    quizDemo.title = title;
    quizDemo.options = options;
    quizDemo.correctAnswerIndex = correctAnswer;
    quizDemo.getCorrectAnswer(){
        return quizDemo.options[quizDemo.correctAnswerIndex]
    };
    quizDemo.isAnswerCorrect (index) {
        return index === quizDemo.correctAnswerIndex;
    };
    return quizDemo;
}
const testData = quiz('Where is the capital of India', ['Mumbai', 'Colombo', 'New Delhi', 'Newyork'], 2);
*/

// Convert the function to use `this` keyword

function quiz (title, options, correctAnswer) {
    let quizDemo = {};
    quizDemo.title = title;
    quizDemo.options = options;
    quizDemo.correctAnswerIndex = correctAnswer;
    quizDemo.getCorrectAnswer() {
        return this.options[this.correctAnswerIndex];
    }; 
    quizDemo .isAnswerCorrect (index) {
        return index === this.correctAnswerIndex;
    };
    return quizDemo;
}
const testData = quiz('Where is the capital of India', ['Mumbai', 'Colombo', 'New Delhi', 'Newyork'], 2);
