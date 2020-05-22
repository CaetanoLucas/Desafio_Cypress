/// <reference types="cypress" />
import dataConfigurations from '../../support/data/configurations.data';
import data from '../../support/data/compra.data';

describe('Naveção de ponta a ponta compras JMAHFUZ', ()=> {

    beforeEach(()=> {
        cy.visit(dataConfigurations.baseUrl);
    });
    
    it('Realizar busca de um notebook e adiciona-lo no carrinho', ()=> {
        cy.navegarAteBotaoComprar(data.product);
        cy.inserirProdutoEValidar(data.quantityOfItems);
    });

    it('Realizar buscar de um produto, adiciona-lo e retira-lo do carrinho', ()=> {
        cy.navegarAteBotaoComprar(data.product);
        cy.inserirProdutoEValidar(data.quantityOfItems);
        cy.InserirProdutoERetirar(data.quantityOfItemsEmpty);
    });
});