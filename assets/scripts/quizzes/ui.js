const store = require('./../store.js')

const newQuestion = function (data) {
    document.getElementById('answer').reset()
    $('#display-answer').text('')
    if (data.quizzes == {} ) {
        $('#display-answer').text(`You've already learned all the capitals-- congrats!`)
        return false
    }
    // get random quiz from quizzes
    const selector = Math.floor(data.quizzes.length * Math.random())
    const quiz = data.quizzes[selector]
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
    $('#display-answer').text("Congrats, you've learned this capital!")
}

const apiFailure = function (error) {
    $('#display-answer').text(`Failed to connect to server.`)
}

module.exports = {
    newQuestion,
    updateQuizSuccess,
    deleteSuccess,
    apiFailure
}