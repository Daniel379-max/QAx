/// <reference types="Cypress" />

describe('tasks', () => {
<<<<<<< HEAD
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
=======

    let testData;

    before(()=>{
        cy.fixture('tasks').then(t =>{
            testData = t
        })

    })

    context('cadastro', () =>{
        const taskName = 'Estudar XPTO'

        it('cadastrar nova tafrefa', () => {
    
            cy.removeTaskByName(taskName)
            cy.createTask(taskName)
            cy.contains('main div p', taskName).should('be.visible')
        })

        it(' não deve permitir a tarefa duplicada', ()=>{
    
            const task = testData.dup
    
            cy.removeTaskByName(task.name)
            cy.postTask(task)
            cy.createTask(task.name)
    
            cy.get('.swal2-html-container').should('be.visible').should('have.text', 'Task already exists!')
        })

        it('campo obrigatorio', ()=>{
            cy.createTask()
    
            cy.isRequired('This is a required field')
        })
    })

    context('atualização', ()=>{
        it('deve concluir uma tarefa', ()=>{
            const task = {
                name: 'Estudar JAVA',
                is_done:false
            }

            cy.removeTaskByName(task.name)
            cy.postTask(task)

            cy.visit('/')

            cy.contains('p', task.name)
                .parent()
                .find('button[class*=ItemToggle]')
                .click()

            cy.contains('p', task.name)
                .should('have.css', 'text-decoration-line', 'line-through')
        })
    })

    context('exclusão', ()=>{
        it('deve remover uma tarefa', ()=>{
            const task = {
                name: 'Criar metodo post',
                is_done:false
            }

            cy.removeTaskByName(task.name)
            cy.postTask(task)

            cy.visit('/')

            cy.contains('p', task.name)
                .parent()
                .find('button[class*=ItemDelete]')
                .click()

            cy.contains('p', task.name)
                .should('not.exist')
        })
    })
})


>>>>>>> branch-teste-codigo
