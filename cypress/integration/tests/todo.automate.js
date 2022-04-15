/// <reference types='cypress' />

describe('toDo list test', () => {
  const task = 'Create test'
  const task2 = 'Edit test'
  const task3 = 'Complete test'
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

    cy.get('.todo-list li')
    .should('have.length', 4)
    .last()
    .should('include.text', task4)
  })

  // it('can create todo items', () => {
  //   cy.get('.new-todo').type(`${task}{enter}`)
  //   cy.get('.todo-list li')
  //   .should('contain', task)
  //   cy.get('.new-todo').type(`${task2}{enter}`)
  //   cy.get('.todo-list li')
  //   .should('contain', task2)
  //   cy.get('.new-todo').type(`${task3}{enter}`)
  //   cy.get('.todo-list li')
  //   .should('contain', task3)
  //   cy.get('.new-todo').type(`${task4}{enter}`)
  //   cy.get('.todo-list li')
  //   .should('contain', task4)

  //   cy.get('.todo-list li')
  //   .should('have.length', 4)
  // })

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

  it('can complete all tasks', () => {
    cy.get('.toggle').check()
    cy.get('.footer').should('contain', '0 items left')
    cy.get('.clear-completed').click()
    cy.get('.new-todo').should('not.have.text', task)
    cy.get('.clear-completed').should('not.exist')
  })

  it('can delete all tasks', () => {
    cy.get('.todo-list li').contains(task)
    .next()
    .click({force: true})

    cy.get('.todo-list li').contains(task2)
    .next()
    .click({force: true})

    cy.get('.todo-list li').contains(task3)
    .next()
    .click({force: true})

    cy.get('.todo-list li').contains(task4)
    .next()
    .click({force: true})

    cy.get('.new-todo').should('not.have.text', task)
    cy.get('.clear-completed').should('not.exist')
  })
})
