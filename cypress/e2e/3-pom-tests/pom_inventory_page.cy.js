/// <reference types="cypress" />
import LoginPage from '../../support/POM/LoginPage';
import InventoryPage from '../../support/POM/InventoryPage';

describe('Inventory Page tests with POM', () => {
    beforeEach(() => {
        LoginPage.open();
        LoginPage.login(Cypress.env('USER_NAME'), Cypress.env('USER_PASSWORD'));
        cy.url().should('include', 'inventory.html');
    })

    it('Checking for burger menu availability', () => {
        InventoryPage.burgerMenu.should('exist');
    })

    it('Checking for shopping Card availability', () => {
        InventoryPage.shoppingCard.should('exist');
    })

    it('Checking for dropdown availability', () => {
        InventoryPage.dropDown.should('exist');
    })

    it('Verify the number of dropdown options', () => {
        cy.get('[data-test="product-sort-container"] option').should('have.length', 4);
    })

    it('Open item page using item name', () => {
        InventoryPage.openItemPage('Sauce Labs Onesie');
    })

    it.only('Open shopping cart page', () => {
        InventoryPage.openCartPage();
        cy.url().should('include', 'cart.html');
    })
})