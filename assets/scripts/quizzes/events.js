const store = require('./../store.js')
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onNewQuestion = function(event) {
    event.preventDefault()
    console.log('new question clicked')
    api.getQuizzes()
        .then(ui.newQuestion)
        .catch((errors) => console.log('get quizzes failed and errors are ', errors))
}

const onAnswerQuestion = function(event) {
    event.preventDefault()
    const consecutiveCorrect = getConsecutiveCorrect (event)

    // ajax request with updated consecutive_correct for quiz
    if (consecutiveCorrect >= 3) {
        // congradulate user and delete quiz
    } else {
        api.updateCorrect(updateApiJSON(consecutiveCorrect))
        .then((data) => console.log('api.updateCorrect ran and the data is ', data))
        .catch((error) => console.log('api.updateCorrect failed and the errors are ', error))
    // ui to user "correct!" or "the capital is __"
    }
}

// determine how many times the user has correctly answered the quiz question
const getConsecutiveCorrect = function (event) {
    const data = getFormFields(event.target)
    // determine whether answer is correct based on the stored value of quiz answer
    const isCorrect = data.answer == store.quiz.card.side_b
    console.log(`The capital is ${store.quiz.card.side_b}. Answer correct? ${isCorrect}`)
    let consecutiveCorrect = store.quiz.consecutive_correct
    isCorrect ? consecutiveCorrect++ : consecutiveCorrect = 0
    console.log('After guess, consecutiveCorrect is ', consecutiveCorrect)
    return consecutiveCorrect
}

const updateApiJSON = function (consecutiveCorrect) {
    const apiData = { 
        quiz: {
        consecutive_correct : consecutiveCorrect 
        }
    }
    return JSON.stringify(apiData)
}

const addHandler = () => {
    console.log('quizzes.addHandler running')
    $('#new-question').on('submit', onNewQuestion)
    $('#answer').on('submit', onAnswerQuestion)
}

module.exports = {
    addHandler
}