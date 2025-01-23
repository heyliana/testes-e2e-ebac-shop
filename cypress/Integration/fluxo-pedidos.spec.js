/// <reference types="cypress" />


import productPage from "../support/page_objects/product.dados";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */
    
    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        /* acessando página minha conta e realizando o login */
        cy.visit("minha-conta")
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })
        cy.get('.page-title').should('contain', 'Minha conta')


        /* acessando a página de produtos e adicionando ao carrinho */
        cy.visit("produtos")
        cy.fixture('products').then(dados => {
            productPage.search(dados[1].productName)
            productPage.addCart(
                dados[1].size,
                dados[1].color,
                dados[1].qtn)
                cy.get('.woocommerce-message').should('contain', 'adicionado no seu carrinho.')
        })

        cy.wait(2000) /* uma pausa entre produtos a serem adicionados ao carrinho */
        cy.visit('produtos')

        cy.fixture('products').then(dados => {
            productPage.search(dados[2].productName)
            productPage.addCart(
                dados[2].size,
                dados[2].color,
                dados[2].qtn)
                cy.get('.woocommerce-message').should('contain', 'adicionado no seu carrinho.')
        })

        cy.wait(2000)
        cy.visit('produtos')

        cy.fixture('products').then(dados => {
            productPage.search(dados[3].productName)
            productPage.addCart(
                dados[3].size,
                dados[3].color,
                dados[3].qtn)
                cy.get('.woocommerce-message').should('contain', dados[3].productName)
        })

        cy.get('.woocommerce-message > .button').click() /* acessando a página do carrinho */
        cy.get('.checkout-button').click() /* acessando a  página de checkout */
        cy.get('#terms').click() /* aceitando o termos da página */
        cy.get('#place_order').click() /* clicando no botão 'Finalizar Compra' */
        cy.wait = 2000 /* pausa para carregamento da página */
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.') /* confirmação de compra */

    });
    
});
