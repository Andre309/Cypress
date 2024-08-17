/// <reference types="cypress" />
import LoginPage from '../../support/POM/LoginPage';

describe('Login Page tests with POM', () => {
    beforeEach(() => {
        LoginPage.open();
    })

    it('Login test with env from config.js', () => {
        LoginPage.login(Cypress.env('USER_NAME'), Cypress.env('USER_PASSWORD'));
        cy.get('[data-test="title"]').should('have.text', 'Products');
        cy.url().should('include', 'inventory.html');
    })

    it('Login for problem user with env from env.json', () => {
        LoginPage.login(Cypress.env('USER_NAME2'), Cypress.env('USER_PASSWORD'));
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('have.attr', 'src', '/static/media/sl-404.168b1cce.jpg');
        cy.url().should('include', 'inventory.html');
    })
})