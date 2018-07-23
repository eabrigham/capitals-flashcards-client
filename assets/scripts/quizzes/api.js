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

module.exports = {
    getQuizzes
}