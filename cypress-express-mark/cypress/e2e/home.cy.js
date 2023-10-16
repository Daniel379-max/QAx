describe('empty spec', () => {
    it('webapp deve estar online', () => {
        cy.visit('/')

        cy.title().should('eq', 'Gerencie suas tarefas com Mark L')
    })
})