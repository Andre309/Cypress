//const { response } = require("express")

it('GET API Using Cypress API Plugin', () => {
    cy.api('GET', 'https://jsonplaceholder.typicode.com/users').should((response) => {
        expect(response.status).to.eq(200);
    });
});

it('POST API Using Cypress API Plugin', () => {
    cy.api('POST', 'https://jsonplaceholder.typicode.com/users', {
        title: 'Text for this post',
        body: 'grab',
        userID: 2
    }).should((response) => {
        expect(response.status).to.eq(201);
    });
});

it('PUT API Using Cypress API Plugin', () => {
    cy.api('PUT', 'https://jsonplaceholder.typicode.com/posts/1',{
        id: 1,
        title: 'Text for this post',
        body: 'grab',
        userID: 1,
    }).should((response) => {
        expect(response.status).to.eq(200)
    });
});