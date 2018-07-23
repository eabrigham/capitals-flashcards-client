const getFormFields = require('../../../lib/get-form-fields.js')
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
    console.log('In onAnswerQuestion and the event is ', event)
    const data = getFormFields(event.target)
    console.log('In onAnswerQuestion and the getFormFields data is ', data)
    // parse the user's answer using getFormFields
    // determine whether answer is correct based on the stored value of quiz
    // ajax request with updated consecutive_correct for quiz
    // ui to user "correct!" or "the capital is __"
}

const addHandler = () => {
    console.log('quizzes.addHandler running')
    $('#new-question').on('submit', onNewQuestion)
    $('#answer').on('submit', onAnswerQuestion)
}

module.exports = {
    addHandler
}