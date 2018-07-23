

const newQuestion = function (data) {
    console.log('In ui.newQuestion and the quizzes are', data.quizzes)
    const selector = Math.floor(data.quizzes.length * Math.random())
    console.log('selector is ', selector)
    const quiz = data.quizzes[selector]
    console.log('In ui.newQuestion and the quiz is', quiz)

    $('#question').text(`What is the capital of ${quiz.card.side_a}`)
}

module.exports = {
    newQuestion
}