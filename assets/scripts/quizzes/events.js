const api = require('./api.js')
const ui = require('./ui.js')

const onNewQuestion = function(event) {
    event.preventDefault()
    console.log('new question clicked')
    api.getQuizzes()
        .then(ui.newQuestion)
        .catch((errors) => console.log('get quizzes failed and errors are ', errors))
}

const addHandler = () => {
    console.log('quizzes.addHandler running')
    $('#new-question').on('submit', onNewQuestion)
}

module.exports = {
    addHandler
}