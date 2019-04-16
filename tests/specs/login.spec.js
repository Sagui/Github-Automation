import { expect } from 'chai'
import LoginPage from '../pages/login.page'
import { siteCredentials as credentials } from '../utilities/utils'

describe(' Login Example Test', () => {
  it('Should receive a error message for invalid password/email/user credential', () => {
    LoginPage.open()
    LoginPage.SignInButton.waitForExist(600)
    LoginPage.signIn()
    LoginPage.login({ ...credentials, password: 'unicorn' })
    LoginPage.incorrectPasswordEmailError.waitForExist(600)
    expect(LoginPage.incorrectPasswordEmailError.getText()).to.contain(
      'Incorrect username or password.'
    )
  })

  it('Should login into Github with success', () => {
    LoginPage.defaultLogin(credentials)
    expect(LoginPage.logoutAnchor.isExisting()).to.be.true
  })
})
