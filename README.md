<p align="center">
  <img src="https://files.catbox.moe/7t42mf.png" width="100">
  <br>
  <b style="font-size: 18px;">MONOCLE</b><br>
</p>

<p align="center">Simple and fun boilerplate for automated tests with WebdriverIO and BrowserStack :microscope: :tea:</p>

## Framework

- Mocha

## Features

- Page Objects Model usage with ES6 style class base approach and fully ES6 - ES8 support through Babel
- Integration with BrowserStack
- Example using BrowserStack capabilities with Chrome through MacOS Sierra
- ESLint using slightly modificated standard style
- Pre-commit support through lint-staged

## Setup

- Clone the repo or unzip the folder with files
- Go to the master of the project in the cmd
- Install dependencies with `yarn install` / `npm install` (Node version 9.2.0)
- Set environment variables in your system OR create `.env` in the project root and update with [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings) 

Like this:

```
BROWSERSTACK_USERNAME=monocleman
BROWSERSTACK_ACCESS_KEY=nTnrxYTqE55jeklwks
```

## Running the tests

- To run the tests:

- `yarn tests` / `npm run tests`

## Git Scenarios tests
Three specs runs will be the result of running the tests: Login spec, Private repo creation & Public repo creation.
