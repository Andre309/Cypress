/// <reference types="cypress" />
import BasePage from './BasePage';

class InventoryPage extends BasePage {
    get burgerMenu() {
        return cy.get('#react-burger-menu-btn');
    }

    get shoppingCard() {
        return cy.get('[data-test="shopping-cart-link"]');
    }

    get dropDown() {
        return cy.get('[data-test="product-sort-container"]');
    }

    open() {
        super.open('inventory.html');
    }

    openItemPage(text) {
        return cy.get('div').contains(text).click();
    }

    openCartPage() {
        return cy.get('[data-test="shopping-cart-link"]').click();
    }
}

export default new InventoryPage();