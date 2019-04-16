import Page from './page'

class LoginPage extends Page {
  get username() {
    return browser.element('input#login_field')
  }

  get password() {
    return browser.element('input#password')
  }

  get LoginButton() {
    return browser.element('input[name="commit"]')
  }

  get incorrectPasswordEmailError() {
    return browser.element('div#js-flash-container div > div')
  }

  get logoutAnchor() {
    return browser.element('details-menu > form > button[type="submit"]')
  }

  get SignInButton() {
    return browser.element(
      'div.d-lg-flex.flex-items-center.px-3.px-lg-0.text-center.text-lg-left > a.HeaderMenu-link.no-underline.mr-3'
    )
  }

  signIn() {
    this.SignInButton.click()
  }

  login({ email, password }) {
    this.username.setValue(email)
    this.password.setValue(password)
    this.submit()
  }

  defaultLogin(credentials) {
    this.login(credentials)
    this.logoutAnchor.waitForExist()
  }

  submit() {
    this.LoginButton.click()
  }

  open() {
    super.open('')
  }
}

export default new LoginPage()
