class productPage {
    visitarUrl(){
        cy.visit('produtos')
    }

    search(productName){
        cy.get('[name="s"]').eq(1).type(productName)
        cy.get('.button-search').eq(1).click()
    }

    addCart(size, color, qtn){
        cy.get('.button-variable-item-'+ size).click()
        cy.get('.button-variable-item-' + color).click()
        cy.get('.input-text').clear().type(qtn)
        cy.get('.single_add_to_cart_button').click()
    }

}

export default new productPage()