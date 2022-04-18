# ToDo list automation task

## 1. Install Cypress automation framework tool

- [Follow the given instructions to install Cypress](https://on.cypress.io/installing-cypress)

## 2. Open the GitHub and clone the project repo

- Open `Terminal` and type:

```
## cypress project on GitHub
git clone https://github.com/dusanmaravic/cypress-todo-automation.git
```
## 3. Install project dependencies

- Open **VS Code** or any other IDE and run:

```
## install dependencies with npm
npm install 
```
or
```
## install dependencies with npm
npm i
```
## 4. Test execution

All the tests are inside *cypress/integration/tests* folder

- To open Cypress test runner, in `Terminal` type:
  
```
## cypress scripts
  npm run open
```
*From the test runner you can choose the browser and which test to run*

- To run and record headless browser tests, in `Terminal` type:
```
## cypress scripts
  npm run test
```
Tests will be automatically recorded and put in *cypress/videos/tests* folder




