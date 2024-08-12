/// <reference types="cypress" />
import BasePage from './BasePage';

class ItemPage extends BasePage {
    get img() {
        return cy.get('[data-test="item-sauce-labs-bolt-t-shirt-img"]');
    }
    get description() {
        return cy.get('[data-test="inventory-item-desc"]');
    }

    get price() {
        return cy.get('[data-test="inventory-item-price"]');
    }

    get itemName() {
        return cy.get('[data-test="inventory-item-name"]');
    }

    get addToCart() {
        return cy.get('[data-test="add-to-cart"]');
    }

    get remove() {
        return cy.get('[data-test="remove"]');
    }

    open(id) {
        super.open(`inventory-item.html?id=${id}`);
    }
}

export default new ItemPage();