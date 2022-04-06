/// <reference types="cypress" />
const faker = require('faker')
describe('Funcionalidade pré cadastro',()=>{
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    it('deve completar o pré cadastro com sucesso', () => {
        let user = {
            email:faker.internet.email(),
            first_name:faker.name.firstName(),
            last_name: faker.name.lastName()
        }
        cy.get('#reg_email').type(user.email)
        cy.get('#reg_password').type('asldkfjakdjf@asdfl.com')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(user.first_name)
        cy.get('#account_last_name').type(user.last_name)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
    });
})