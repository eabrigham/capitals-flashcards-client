'use strict'

const authEvents = require('./auth/events.js')
const quizzesEvents = require('./quizzes/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  console.log ('document ready running in index.js')
  authEvents.addHandler()
  quizzesEvents.addHandler()
})
