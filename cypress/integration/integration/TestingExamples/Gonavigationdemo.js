/// <reference types="cypress"/>


describe('go test', () => { 

    it('navigation test', () => {
        cy.visit('https://demo.nopcommerce.com/');
        cy.title().should('eq','nopCommerce demo store');
        cy.get('.ico-register').contains('Reg').click();
        cy.title().should('eq','nopCommerce demo store. Register');
        cy.go('back');
        cy.title().should('eq','nopCommerce demo store');
        cy.go('forward');
        cy.title().should('eq','nopCommerce demo store. Register');
        cy.go(-1); // will go back also
        cy.title().should('eq','nopCommerce demo store');
        cy.go(1) // will go forward also
        cy.title().should('eq','nopCommerce demo store. Register');
        cy.reload();   // this will refresh or reload the page
    });
 });