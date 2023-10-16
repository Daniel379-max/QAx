describe('empty spec', () => {
    it('webapp deve estar online', () => {
<<<<<<< HEAD
        cy.visit('http://localhost:8080')
=======
        cy.visit('/')
>>>>>>> branch-teste-codigo

        cy.title().should('eq', 'Gerencie suas tarefas com Mark L')
    })
})