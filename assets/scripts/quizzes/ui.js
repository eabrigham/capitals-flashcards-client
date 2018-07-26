const store = require('./../store.js')

const newQuestion = function (data) {
    console.log('In ui.newQuestion and the data is ', data)
    console.log('In ui.newQuestion and the quizzes are', data.quizzes)
    if (data.quizzes = {} ) {
        $('#display-answer').text(`You've already learned all the capitals-- congrats!`)
        return false
    }
    const selector = Math.floor(data.quizzes.length * Math.random())
    console.log('selector is ', selector)
    const quiz = data.quizzes[selector]
    console.log('In ui.newQuestion and the quiz is', quiz)
    store.quiz = quiz

    $('#question').text(`${quiz.card.side_a}`)
}

const updateQuizSuccess = function (data) {
    console.log('api.updateCorrect ran and the data is ', data)
    if (data.quiz.consecutive_correct) {
        $('#display-answer').text('Correct!')
    } else {
        $('#display-answer').text(`The capital is ${data.quiz.card.side_b}`)
    }
}

const deleteSuccess = function (data) {
    console.log('delete success ran and data is ', data)
    $('#display-answer').text("Congrats, you've learned this capital!")
}

const apiFailure = function (error) {
    console.log('api.updateCorrect failed and the errors are ', error)
    $('#display-answer').text(`Failed to connect to server.`)
}

module.exports = {
    newQuestion,
    updateQuizSuccess,
    deleteSuccess,
    apiFailure
}