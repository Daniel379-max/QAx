/// <reference types="Cypress" />

describe('tasks', () => {
    it('cadastrar nova tafrefa', () => {

        cy.request({
            url: 'http://localhost:3333/helper/tasks',
            method: 'DELETE',
            body: { name: 'teste 1234' }
        }).then(response => {
            expect(response.status).to.eq(204)
        })

        cy.visit('http://localhost:8080')

        cy.get('input[placeholder="Add a new Task"]').type('teste 1234');

        cy.contains('button', 'Create').click();

        cy.contains('main div p', 'teste 1234').should('be.visible')



    })
})