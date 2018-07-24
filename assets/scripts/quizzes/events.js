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
    console.log('In onAnswerQuestion and the event is ', event)
    // parse the user's answer using getFormFields
    const data = getFormFields(event.target)
    console.log('In onAnswerQuestion and the getFormFields data is ', data)
    // determine whether answer is correct based on the stored value of quiz answer
    const isCorrect = data.answer == store.quiz.card.side_b
    console.log(`The capital is ${store.quiz.card.side_b}. Answer correct? ${isCorrect}`)
    console.log('The store is ', store)
    let consecutiveCorrect = store.quiz.consecutive_correct
    console.log('Prior correct is ', consecutiveCorrect)
    if (isCorrect) {
        consecutiveCorrect++
    } else {
        consecutiveCorrect = 0
    }
    console.log('After guess, consecutiveCorrect is ', consecutiveCorrect)

    const apiData = { 
        quiz: {
        consecutive_correct : consecutiveCorrect 
        }
    }
    console.log(apiData)
    // ajax request with updated consecutive_correct for quiz
    api.updateCorrect(JSON.stringify(apiData))
        .then((data) => console.log('api.updateCorrect ran and the data is ', data))
        .catch((error) => console.log('api.updateCorrect failed and the errors are ', error))
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