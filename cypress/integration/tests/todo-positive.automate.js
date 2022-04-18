//using cypress snippets with installed extensions
/// <reference types='cypress' />

describe('ToDo list positive Test', () => {
  //declaring constants on code block level
  const task = 'Create test'
  const task2 = 'Edit test'
  const task3 = 'Complete test'
  const task4 = 'Delete test'

  beforeEach(() => {
    //navigate to app page and assert navigated path
    cy.visit('https://todomvc.com/examples/angular2/')
    cy.location('pathname').should('equal', '/examples/angular2/')
    //create new alias
    cy.get('.new-todo').as('Todos')

    // cy.get('@Todos').type(`${task}{enter}`)
    // cy.get('.todo-list li')
    // .should('contain', task)
    // cy.get('@Todos').type(`${task2}{enter}`)
    // cy.get('.todo-list li')
    // .should('contain', task2)
    // cy.get('@Todos').type(`${task3}{enter}`)
    // cy.get('.todo-list li')
    // .should('contain', task3)
    // cy.get('@Todos').type(`${task4}{enter}`)
    // cy.get('.todo-list li')
    // .should('contain', task4)

    // cy.get('.todo-list li')
    // .should('have.length', 4)
    // .last()
    // .should('include.text', task4)
  })

  it('can create todo items', () => {
    
    cy.get('@Todos').type(`${task}{enter}`)
    cy.get('.todo-list li')
    .should('contain', task)
    cy.get('@Todos').type(`${task2}{enter}`)
    cy.get('.todo-list li')
    .should('contain', task2)
    cy.get('@Todos').type(`${task3}{enter}`)
    cy.get('.todo-list li')
    .should('contain', task3)
    cy.get('@Todos').type(`${task4}{enter}`)
    cy.get('.todo-list li')
    .should('contain', task4)
    //assert number of created todos
    cy.get('.todo-list li')
    .should('have.length', 4)
  })

  it('can edit all todo items', () => {

    cy.get('@Todos').type(`${task}{enter}`)
    cy.get('.todo-list li').contains(task).dblclick()
    cy.get('.edit').clear()
    cy.get('.edit').type('First task edited{enter}')
    cy.get('.todo-list li').should('contain', 'First task')

    cy.get('@Todos').type(`${task2}{enter}`)
    cy.get('.todo-list li').contains(task2).dblclick()
    cy.get('.edit').clear()
    cy.get('.edit').type('Second task edited{enter}')
    cy.get('.todo-list li').should('contain', 'Second task')

    cy.get('@Todos').type(`${task3}{enter}`)
    cy.get('.todo-list li').contains(task3).dblclick()
    cy.get('.edit').clear()
    cy.get('.edit').type('Third task edited{enter}')
    cy.get('.todo-list li').should('contain', 'Third task edited')

    cy.get('@Todos').type(`${task4}{enter}`)
    cy.get('.todo-list li').contains(task4).dblclick()
    cy.get('.edit').clear()
    cy.get('.edit').type('Fourth task edited{enter}')
    cy.get('.todo-list li').should('contain', 'Fourth task edited')
    cy.get('.todo-list li').should('have.length', 4)
  })

  it('can complete all tasks', () => {

    cy.get('@Todos').type(`${task}{enter}`)
    cy.get('@Todos').type(`${task2}{enter}`)
    cy.get('@Todos').type(`${task3}{enter}`)
    cy.get('@Todos').type(`${task4}{enter}`)
    //check all radio buttons
    cy.get('.toggle').check()
    //assert no item left unchecked
    cy.get('.footer').should('contain', '0 items left')
    cy.get('.clear-completed').click()
    cy.get('@Todos').should('not.have.text', task)
    //assert all todo items completed
    cy.get('.clear-completed').should('not.exist')
  })

  it('can delete all tasks', () => {

    cy.get('@Todos').type(`${task}{enter}`)
    cy.get('@Todos').type(`${task2}{enter}`)
    cy.get('@Todos').type(`${task3}{enter}`)
    cy.get('@Todos').type(`${task4}{enter}`)

    cy.get('.todo-list li').contains(task)
    //goto button for item deletion
    .next()
    //click on hidden button
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

    cy.get('@Todos').should('not.have.text', task)
    cy.get('.clear-completed').should('not.exist')
  })
})
