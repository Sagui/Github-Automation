import { expect } from 'chai'
import HomePage from '../pages/home.page'
import {
  siteCredentials as credentials,
  randomRepoName,
  ReadMeInfo
} from '../utilities/utils'
import LoginPage from '../pages/login.page'
import RepoDetailPage from '../pages/repoDetail.page'

describe('Private repo test', () => {
  const RepoName = randomRepoName()
  browser.windowHandleFullscreen()
  it('Should login into Github with success', () => {
    LoginPage.open()
    LoginPage.SignInButton.waitForExist(600)
    LoginPage.signIn()
    LoginPage.defaultLogin(credentials)
    expect(LoginPage.logoutAnchor.isExisting()).to.be.true
  })

  it('Should create a github repository with success', () => {
    HomePage.profileDetailpage()
    HomePage.createPrivateRepo(RepoName)
    expect(HomePage.watchButton.isExisting()).to.be.true
  })

  it('Should add a readme file with success to the created repo', () => {
    RepoDetailPage.readMeButton.waitForExist(1000)
    RepoDetailPage.readMeDetailPage()
    RepoDetailPage.createReadme(ReadMeInfo.comment)
    expect(RepoDetailPage.readMeFileLinkExist.isExisting()).to.be.true
  })

  it('Should delete the private created repo', () => {
    RepoDetailPage.deletePrivateRepo(RepoName)
    expect(RepoDetailPage.dashboardView.isExisting()).to.be.true
  })
})
