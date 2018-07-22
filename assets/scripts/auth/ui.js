'use strict'

const store = require('../store.js')

const mismatchedPasswords = function () {
  document.getElementById('sign-up').reset()
  $('#game-message').text(`Passwords don't match. Please sign up again.`)
}

const signUpSuccess = function (data) {
  document.getElementById('sign-up').reset()
  $('#game-message').text('Signed up successfully')
}

const signUpFailure = function (err) {
  document.getElementById('sign-up').reset()
  $('#game-message').text('Error on sign up.')
}

const signInSuccess = function (data) {
  document.getElementById('sign-in').reset()
  $('#game-message').text('Signed in successfully')
  $('#sign-up, #sign-in').css('visibility', 'hidden')
  $('#sign-out, #change-password, #new-game, #display-games').css('visibility', 'visible')
  store.user = data.user
}

const signInFailure = function (err) {
  document.getElementById('sign-in').reset()
  $('#game-message').text('Error on sign in. Please check your password.')
}

const changePasswordSuccess = function (data) {
  document.getElementById('change-password').reset()
  $('#game-message').text('Changed password successfully')
}

const changePasswordFailure = function (err) {
  document.getElementById('change-password').reset()
  $('#game-message').text('Error on change password.')
}

const signOutSuccess = function (data) {
  document.getElementById('sign-out').reset()
  $('#game-message').text('Signed out successfully')
  $('#sign-up, #sign-in').css('visibility', 'visible')
  $('#sign-out, #change-password, #new-game, #display-games').css('visibility', 'hidden')
  $('#game-board').empty()
  store.user = null
}

const signOutFailure = function (err) {
  document.getElementById('sign-out').reset()
  $('#game-message').text('Error on sign out.')
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
  signOutFailure
}
