/// <reference types='cypress' />

describe('ToDo list negative Test', () => {
    const numbers = 1010101010
    const specChar = '@$#%^^^#@!!@##'
    const emptyString = ''
    const emptySpace = ' '
    const undefined = null

    beforeEach(() => {
        cy.visit('https://todomvc.com/examples/angular2/')
        cy.location('pathname').should('equal', '/examples/angular2/')

        cy.get('.new-todo').as('Todos')
    })

    it('create numbers todo item', () => {

        cy.get('@Todos').type(`${numbers}{enter}`)
        .first()
        cy.get('.todo-list li').should('contain', numbers)
    })

    it('create special char todo item', () => {

        cy.get('@Todos').type(`${specChar}{enter}`)
        .first()
        cy.get('.todo-list li').should('contain', specChar)
    })

    it('create empty string todo item', () => {

        cy.get('@Todos').type(`${emptyString}{enter}`)
        .should('contain', emptyString)
        expect(emptyString).to.be.empty
    })

    // it('create empty space string todo item', () => {

    //     cy.get('@Todos').type(`${emptySpace}{enter}`)
    //     .should('contain', emptySpace)
    // })

    it('create undefined todo item', () => {
        cy.get('@Todos').type(`${undefined}{enter}`)
        cy.get('.todo-list li')
        expect(undefined).to.be.null.value
    })
})