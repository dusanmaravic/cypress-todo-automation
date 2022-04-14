/// <reference types='cypress' />

const { should } = require("chai")

describe('ToDoList Test', () => {
  const newToDo = 'First task'
  const newToDo2 = 'Second task'
  const newToDo3 = 'Third task'
  const newToDo4 = 'Fourth task'

  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/angular2/')
  })

  it('create four todo list items', () => {
    cy.get('.new-todo').type(`${newToDo}{enter}`)
    should('contain', newToDo)
    cy.get('.new-todo').type(`${newToDo2}{enter}`)
    cy.get('.new-todo').type(`${newToDo3}{enter}`)
    cy.get('.new-todo').type(`${newToDo4}{enter}`)
    cy.get('.todo-list li').should('have.length', 4)
    // .last().should('have.text', newToDo4)
  })
})
