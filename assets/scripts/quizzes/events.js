const store = require('./../store.js')
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onNewQuestion = function(event) {
    if (event) {
    event.preventDefault()
    }
    console.log('in new question')
    api.getQuizzes()
        .then(ui.newQuestion)
        .catch(ui.apiFailure)
}

const onAnswerQuestion = function(event) {
    event.preventDefault()
    const consecutiveCorrect = getConsecutiveCorrect (event)

    if (consecutiveCorrect >= 3) {
        // congradulate user and delete quiz
        api.deleteQuiz()
            .then(ui.deleteSuccess)
            .catch(ui.apiFailure)
    } else {
        // ajax request with updated consecutive_correct for quiz
        api.updateQuiz(updateApiJSON(consecutiveCorrect))
         // ui to user "correct!" or "the capital is __"
            .then(ui.updateQuizSuccess)
            .catch(ui.apiFailure)
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
    addHandler,
    onNewQuestion
}