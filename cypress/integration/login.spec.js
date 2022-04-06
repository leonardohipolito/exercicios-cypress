/// <reference types="cypress" />

context('Funcionalidade Login', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain','Minha conta')
    });
    it('deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('aluno_ebacd@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido')
    });
    it('deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('asdfasdf')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta')
    });
});