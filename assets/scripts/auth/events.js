/* Function which runs when a user enters data into signup form
Use getFormFields to get data from input
Verify that data is in correct format
Run fxn from API file to sign up user
*/
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  if (data.credentials.password !== data.credentials.password_confirmation) {
    ui.mismatchedPasswords()
    return false
  }
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // TODO verify data format
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  console.log('running sign out function')
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const addHandler = () => {
  // button modal handlers
  $('#sign-up-button').on('click', () => $('#sign-up-modal').css('display', 'block'))
  $('#sign-in-button').on('click', () => $('#sign-in-modal').css('display', 'block')) 
  $('#change-password-button').on('click', () => $('#change-password-modal').css('display', 'block')) 

  $(".close").on('click', ui.closeModal)


  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out-button').on('click', onSignOut)

}

module.exports = {
  addHandler
}
