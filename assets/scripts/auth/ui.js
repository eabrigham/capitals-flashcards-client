'use strict'

const store = require('../store.js')
const quizEvents = require('../quizzes/events.js')

const mismatchedPasswords = function () {
  document.getElementById('sign-up').reset()
  $('.message').text(`Passwords don't match. Please sign up again.`)
}
const signUpSuccess = function (data) {
  document.getElementById('sign-up').reset()
  $('.message').text('Signed up successfully')
  window.setTimeout(closeModal, 1000)
}

const signUpFailure = function (err) {
  document.getElementById('sign-up').reset()
  $('.message').text('Error on sign up.')
}

const signInSuccess = function (data) {
  document.getElementById('sign-in').reset()
  $('.message').text('Signed in successfully')
  $('#sign-up-button, #sign-in-button').css('display', 'none')
  $('#sign-out-button, #change-password-button').css('display', 'inline')
  store.user = data.user
  setTimeout(closeModal, 1000)
  setTimeout(() => $('#flashcard').css('display', 'block'), 1100)
  quizEvents.onNewQuestion()
}

const signInFailure = function (err) {
  document.getElementById('sign-in').reset()
  $('.message').text('Error on sign in. Please check your password.')
}

const changePasswordSuccess = function (data) {
  document.getElementById('change-password').reset()
  $('.message').text('Changed password successfully')
  window.setTimeout(closeModal, 1000)

}

const changePasswordFailure = function (err) {
  document.getElementById('change-password').reset()
  $('.message').text('Error on change password.')
}

const signOutSuccess = function (data) {
  $('.message').text('Signed out successfully')
  $('#sign-up-button, #sign-in-button').css('display', 'inline')
  $('#sign-out-button, #change-password-button, #flashcard').css('display', 'none')
  $('#question, #display-answer').text('')
  store.user = null
}

const signOutFailure = function (err) {
  document.getElementById('sign-out').reset()
  $('.message').text('Error on sign out.')
}

const closeModal = function () {
  $(".modal").css("display", "none")
  $('.message').text('')

}

module.exports = {
  mismatchedPasswords,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  closeModal
}
