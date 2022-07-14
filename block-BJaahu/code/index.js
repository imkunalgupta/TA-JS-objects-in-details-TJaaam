// factory pattern
// function quiz (title, options, correctAnswer) {
//     let quizDemo = {};
//     quizDemo.title = title;
//     quizDemo.options = options;
//     quizDemo.correctAnswerIndex = correctAnswer;

//     quizDemo.getCorrectAnswer = function(){
//         return quizDemo.options[quizDemo.correctAnswerIndex]
//     };
//     quizDemo.isAnswerCorrect = function(index) {
//         return index === quizDemo.correctAnswerIndex;
//     };
//     return quizDemo;
// }

//prototypal Pattern


// let questionMethods = {
//     getCorrectAnswer: function(){
//         return this.options[this.correctAnswerIndex]  
//     },
//     isAnswerCorrect: function(index){
//         return index === this.correctAnswerIndex;
//     },
// };

// function question (title, options, correctAnswer) {
//     let questionInfo = Object.create(questionMethods);
//     questionInfo.title = title;
//     questionInfo.options = options;
//     questionInfo.correctAnswerIndex = correctAnswer;
//     return questionInfo;
// }
// let firstQuestion = question(
//     'Where is the capital of Jordan',
//     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     1
// );
// let secondQuestion = question(
//     'Where is the capital of Jamaica',
//     ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//     2
// );

//Pseudoclassical Pattern

// function Question (title, options, correctAnswer) {
//     this.title = title;
//     this.options = options;
//     this.correctAnswerIndex = correctAnswer;
// }
// Question.prototype = {
//     getCorrectAnswer: function(){
//         return this.options[this.correctAnswerIndex]  
//     },
//     isAnswerCorrect: function(index){
//         return index === this.correctAnswerIndex;
//     },
// };


// let firstQuestion = new Question(
//     'Where is the capital of Jordan',
//     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     1
// );
// let secondQuestion = new Question(
//     'Where is the capital of Jamaica',
//     ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//     2
// );

// class pattern

class Question {
    constructor(title, options, correctAnswer){
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswer; 
    }
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex]
    }
    isAnswerCorrect(index){
        return index === this.correctAnswerIndex;
    }
};

let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
);
let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
);