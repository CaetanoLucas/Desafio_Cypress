/// <reference types="cypress" />
import dataConfigurations from '../../support/data/configurations.data';
import data from '../../support/data/compra.data';

describe('Navegação de ponta à ponta compras JMAHFUZ', ()=> {

    beforeEach(()=> {
        cy.visit(dataConfigurations.baseUrl);
    });
    
    it('Realizar busca de um produto e adiciona-lo ao carrinho', ()=> {
        cy.navegarAteBotaoComprar(data.product);
        cy.inserirProdutoEValidar(data.quantityOfItems);
    });

    it('Realizar buscar de um produto, adiciona-lo e retira-lo do carrinho', ()=> {
        cy.navegarAteBotaoComprar(data.product);
        cy.inserirProdutoEValidar(data.quantityOfItems);
        cy.retirarProdutoEValidar(data.quantityOfItemsEmpty);
    });

    it('Realizar busca de um produto adiciona-lo ao carrinho, informar CEP e validar prazo de entrega', ()=> {
        cy.navegarAteBotaoComprar(data.product);
        cy.inserirProdutoEValidar(data.quantityOfItems);
        cy.informarCEPeValidarPrazoEntrega(data.cep);
    });
    // teste git
});