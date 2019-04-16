import Page from './page'

class HomePage extends Page {
  get myProfilebutton() {
    return browser.element(
      'div.Header-item.position-relative.mr-0 > details > details-menu > a:nth-child(5)'
    )
  }

  get repositoriesTab() {
    return browser.element('main#js-pjax-container nav > a:nth-child(2)')
  }

  get newRepoButton() {
    return browser.element(
      'main#js-pjax-container div.TableObject-item.text-right > a'
    )
  }

  get repoNameInput() {
    return browser.element('input#repository_name')
  }

  get descriptionInput() {
    return browser.element('input#repository_description')
  }

  get privateRepoRadioButton() {
    return browser.element('input#repository_visibility_private')
  }

  get createRepoButton() {
    return browser.element('form#new_repository button[type="submit"]')
  }

  get alreadyExistError() {
    return browser.element('form#new_repository dd.error')
  }

  get watchButton() {
    return browser.element('main#js-repo-pjax-container summary > span')
  }

  get profileBox() {
    return browser.element(
      'div.Header-item.position-relative.mr-0 > details > summary'
    )
  }

  get overViewTab() {
    return browser.element(
      'main#js-pjax-container a.UnderlineNav-item.selected'
    )
  }

  profileDetailpage() {
    this.profileBox.click()
    this.myProfilebutton.click()
    this.overViewTab.waitForExist()
  }

  createPublicRepo(RepoName) {
    this.repositoriesTab.click()
    this.newRepoButton.waitForExist()
    this.newRepoButton.click()
    this.repoNameInput.waitForExist()
    this.repoNameInput.setValue(RepoName)
    this.descriptionInput.setValue('This is a happy new repo')
    this.createRepoButton.isEnabled()
    this.createRepoButton.click()
  }

  createPrivateRepo(RepoName) {
    this.repositoriesTab.click()
    this.newRepoButton.waitForExist()
    this.newRepoButton.click()
    this.repoNameInput.waitForExist()
    this.repoNameInput.setValue(RepoName)
    this.descriptionInput.setValue('This is a happy new repo')
    this.privateRepoRadioButton.click()
    this.createRepoButton.isEnabled()
    this.createRepoButton.click()
  }

  get open() {
    super.open('')
  }
}

export default new HomePage()
