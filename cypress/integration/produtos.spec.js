/// <reference types="cypress" />

describe('Funcionalidade páginade produtos',()=>{
    beforeEach(()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    })
    it('deve selecionar um produto da lista',()=>{
        cy.get('.post-2559').click()
    })
    it.only('deve adicionar um produto ao carrinho', () => {
        cy.get('.post-2559').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(2)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',2)
        cy.get('.woocommerce-message').should('contain','2 × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });
})