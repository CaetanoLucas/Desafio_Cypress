/// <reference types="cypress" />
import elements from '../elements/compra.elements';

    Cypress.Commands.add("navegarAteBotaoComprar", (product)=> {
        cy.get(elements.fldSearch).type(product);
        cy.get(elements.btnSearch).click();
        cy.get(elements.productGrid).should('exist');
        cy.get(elements.productItem).first().click();
    });

    Cypress.Commands.add("inserirProdutoEValidar", (quantityOfItems)=> {
        cy.get(elements.productModel).invoke('text').then((model)=> {
            const productModel = model;
            cy.get(elements.btnBuy).click();
            cy.get(elements.quantityOfProducts).should('have.text', quantityOfItems);
            cy.get(elements.shoppingCartItem).invoke('text').then((model)=> {
                const shoppingCartItem = model;
                expect(shoppingCartItem).to.contains(productModel);
            });
        });
    });

    Cypress.Commands.add("retirarProdutoEValidar", (quantityOfItemsEmpty)=> {
        cy.get(elements.btnDelet).click();
        cy.get(elements.quantityOfProducts).should('have.text', quantityOfItemsEmpty);
    });

    Cypress.Commands.add("informarCEPeValidarPrazoEntrega", (cep)=> {
        cy.get(elements.freightMessage).should('not.exist');
        cy.get(elements.fldCEP).type(cep);
        cy.get(elements.btnCEP).click();
        cy.get(elements.freightMessage).should('exist');
    });

    