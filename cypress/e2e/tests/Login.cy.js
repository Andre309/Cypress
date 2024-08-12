/// <reference types="cypress" />

describe('Login Form', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })

    it('Positive login test', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="title"]').should('have.text', 'Products');
        cy.url().should('include', 'inventory.html');
    })

    it('1.Wrong username', () => {
        cy.get('[data-test="username"]').type('incorrect_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    })

    it('2.Wrong password', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('incorrect_password');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    })

    it('3.Empty username field', () => {
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required');
    })

    it('4.Empty password field', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required');
    })

    it('5.From negative to Positive login test', () => {
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="title"]').should('have.text', 'Products');
        cy.url().should('include', 'inventory.html');
    })
})