/// <reference types="cypress" />
import BasePage from './BasePage';

class LoginPage extends BasePage {

    get usernameField() {
        return cy.get('[data-test="username"]');
    }

    get passwordField() {
        return cy.get('[data-test="password"]');
    }

    get loginButton() {
        return cy.get('[data-test="login-button"]');
    }

    get errorMessege() {
        return cy.get('[data-test="error"]');
    }

    open() {
        super.open('');
    }

    login(userName, password) {
        this.usernameField.type(userName);
        this.passwordField.type(password);
        this.loginButton.click();
    }

    verifyErrorMessage(text) {
        this.errorMessege.should('have.text', text);
    }
}

export default new LoginPage();