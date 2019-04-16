import Page from './page'

class RepoDetailPage extends Page {
  get readMeButton() {
    return browser.element('main#js-repo-pjax-container p > a:nth-child(3)')
  }

  get notFocused() {
    return browser.element(
      '#js-repo-pjax-container > div.container-lg.new-discussion-timeline.experiment-repo-nav > div.repository-content > div > form.js-blob-form > div.file.mx-lg-3.border-left-0.border-right-0.border-lg-left.border-lg-right.border-lg-bottom.js-code-editor.container-preview.show-code > div.commit-create.position-relative > div'
    )
  }
  get codeMirrorContainer() {
    return browser.element(
      '#js-repo-pjax-container > div.container-lg.new-discussion-timeline.experiment-repo-nav > div.repository-content > div > form.js-blob-form > div.file.mx-lg-3.border-left-0.border-right-0.border-lg-left.border-lg-right.border-lg-bottom.js-code-editor.container-preview.show-code > div.commit-create.position-relative > div > div.CodeMirror-scroll > div.CodeMirror-sizer > div > div > div > div.CodeMirror-code'
    )
  }

  get commitSummaryInput() {
    return browser.element('input#commit-summary-input')
  }

  get commitNewFileButton() {
    return browser.element('button#submit-file')
  }

  get commitCancelButton() {
    return browser.element(
      'main#js-repo-pjax-container div.file-commit-form.js-file-commit-form > a'
    )
  }

  get readMeFileLinkExist() {
    return browser.element('main#js-repo-pjax-container td.content > span > a')
  }

  get repoSettingsTabPrivate() {
    return browser.element(
      '#js-repo-pjax-container > div.pagehead.repohead.instapaper_ignore.readability-menu.experiment-repo-nav > nav > a:nth-child(6) > svg'
    )
  }

  get repoSettingsTabPublic() {
    return browser.element(
      '#js-repo-pjax-container > div.pagehead.repohead.instapaper_ignore.readability-menu.experiment-repo-nav > nav > a:nth-child(7) > svg'
    )
  }

  get deleteRepositoryModalButton() {
    return browser.element(
      '#options_bucket > div.Box.Box--danger > ul > li:nth-child(4) > details > summary'
    )
  }

  get deleteRepoNameInput() {
    return browser.element(
      'div#options_bucket li:nth-child(4) > details > details-dialog > div.Box-body.overflow-auto > form > p > input[name="verify"]'
    )
  }

  get deleteSubmitButton() {
    return browser.element(
      'div#options_bucket li:nth-child(4) > details > details-dialog > div.Box-body.overflow-auto > form > button[type="submit"]'
    )
  }

  get dashboardView() {
    return browser.element(
      'aside.team-left-column.col-12.col-md-3.col-lg-3.pr-5.mt-5.hide-lg.hide-md.hide-sm.border-bottom > h2'
    )
  }

  readMeDetailPage() {
    this.readMeButton.click()
  }

  createReadme(ReadMeInfo) {
    this.codeMirrorContainer.waitForExist()
    this.notFocused.click()
    this.codeMirrorContainer.addValue(ReadMeInfo)
    this.commitSummaryInput.setValue('Creating read me commit, hi!')
    this.commitNewFileButton.click()
  }

  deletePrivateRepo(repoName) {
    this.repoSettingsTabPrivate.waitForExist(1000)
    this.repoSettingsTabPrivate.click()
    this.deleteRepositoryModalButton.waitForExist(2000)
    this.deleteRepositoryModalButton.click()
    this.deleteRepoNameInput.waitForExist(1000)
    this.deleteRepoNameInput.setValue(repoName)
    this.deleteSubmitButton.waitForExist(1000)
    this.deleteSubmitButton.click()
  }

  deletePublicRepo(repoName) {
    this.repoSettingsTabPublic.waitForExist(1000)
    this.repoSettingsTabPublic.click()
    this.deleteRepositoryModalButton.waitForExist(2000)
    this.deleteRepositoryModalButton.click()
    this.deleteRepoNameInput.waitForExist(1000)
    this.deleteRepoNameInput.setValue(repoName)
    this.deleteSubmitButton.waitForExist(1000)
    this.deleteSubmitButton.click()
  }
}

export default new RepoDetailPage()
