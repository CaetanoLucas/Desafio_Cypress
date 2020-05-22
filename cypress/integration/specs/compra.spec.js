/// <reference types="cypress" />
import dataConfigurations from '../../support/data/configurations.data';
import data from '../../support/data/compra.data';

describe('Naveção de ponta a ponta compras JMAHFUZ', ()=> {

    beforeEach(()=> {
        cy.visit(dataConfigurations.baseUrl);
    });
    
    it('Realizar busca de um notebook e adiciona-lo no carrinho', ()=> {
        cy.buscarAdicionarItem(data.product, data.quantityOfItems);
    });
});