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

const updateCorrect = function (data) {
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

module.exports = {
    getQuizzes,
    updateCorrect
}