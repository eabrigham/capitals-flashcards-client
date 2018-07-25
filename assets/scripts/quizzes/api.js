const config = require('./../config.js')
const store = require('./../store.js')

const getQuizzes = function () {
    return $.ajax({
        url: config.apiUrl + '/quizzes',
        method: 'GET',
        headers: {
            Authorization: 'Token token=' + store.user.token
        } 
    })
}

const updateQuiz = function (data) {
    return $.ajax({
        url: config.apiUrl + '/quizzes/' + store.quiz.id,
        method: 'PATCH',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        headers: {
            Authorization: 'Token token=' + store.user.token,
        },
        data
    })
}

const deleteQuiz = function () {
    return $.ajax({
        url: config.apiUrl + '/quizzes/' + store.quiz.id,
        method: 'DELETE',
        headers: {
          Authorization: 'Token token=' + store.user.token
        }
      })
}

module.exports = {
    getQuizzes,
    updateQuiz,
    deleteQuiz
}