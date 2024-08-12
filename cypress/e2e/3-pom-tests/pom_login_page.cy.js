/// <reference types="cypress" />
import LoginPage from '../../support/POM/LoginPage';
import testData from '../../fixtures/credentials.json';

describe('Login Page tests with POM', () => {
    beforeEach(() => {
        LoginPage.open();
    })

    it('1. Positive login test', () => {
        LoginPage.login(testData.userNames.correctUsername, testData.userPasswords.correctPassword);
        cy.get('[data-test="title"]').should('have.text', 'Products');
        cy.url().should('include', 'inventory.html');
    })

    it('2. Wrong password', () => {
        LoginPage.login(testData.userNames.correctUsername, testData.userPasswords.incorrectPassword);
        LoginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
    })
})