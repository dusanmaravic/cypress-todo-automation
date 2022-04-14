/// <reference types='cypress' />

describe('toDo list test', () => {
  const task = 'Create test'
  const task2 = 'Edit test'
  const task3 = 'Check test'
  const task4 = 'Delete test'

  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/angular2/')

    cy.get('.new-todo').type(`${task}{enter}`)
    cy.get('.todo-list li')
    .should('contain', task)
    cy.get('.new-todo').type(`${task2}{enter}`)
    cy.get('.todo-list li')
    .should('contain', task2)
    cy.get('.new-todo').type(`${task3}{enter}`)
    cy.get('.todo-list li')
    .should('contain', task3)
    cy.get('.new-todo').type(`${task4}{enter}`)
    cy.get('.todo-list li')
    .should('contain', task4)
  })

  it('create four todo list items', () => {
    // cy.get('.new-todo').type(`${task}{enter}`)
    // cy.get('.todo-list li')
    // .should('contain', task)
    // cy.get('.new-todo').type(`${task2}{enter}`)
    // cy.get('.todo-list li')
    // .should('contain', task2)
    // cy.get('.new-todo').type(`${task3}{enter}`)
    // cy.get('.todo-list li')
    // .should('contain', task3)
    // cy.get('.new-todo').type(`${task4}{enter}`)
    // cy.get('.todo-list li')
    // .should('contain', task4)

    cy.get('.todo-list li')
    .should('have.length', 4)
    // .last()
    // .should('have.text', newToDo4)
  })

  it('can edit all todo items', () => {

    cy.get('.todo-list li').contains(task).dblclick()
    cy.get('.edit').clear()
    cy.get('.edit').type('First task edited{enter}')
    cy.get('.todo-list li').should('contain', 'First task')

    cy.get('.todo-list li').contains(task2).dblclick()
    cy.get('.edit').clear()
    cy.get('.edit').type('Second task edited{enter}')
    cy.get('.todo-list li').should('contain', 'Second task')

    cy.get('.todo-list li').contains(task3).dblclick()
    cy.get('.edit').clear()
    cy.get('.edit').type('Third task edited{enter}')
    cy.get('.todo-list li').should('contain', 'Third task edited')

    cy.get('.todo-list li').contains(task4).dblclick()
    cy.get('.edit').clear()
    cy.get('.edit').type('Fourth task edited{enter}')
    cy.get('.todo-list li').should('contain', 'Fourth task edited')

    cy.get('.todo-list li').should('have.length', 4)
  })

  it('can check all tasks as completed', () => {
    cy.get('.toggle').check()
  })
})
