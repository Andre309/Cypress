//const { response } = require("express")

describe('API testing with request', () => {

    it('Request - GET - /users', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            const body = response.body;
            expect(body.length).equal(10);
            expect(body[2].email).to.be.equal('Nathan@yesenia.net');
            expect(body[4].address.city).to.be.equal('Roscoeview');
        })
    })

    it('Request - GET - /posts', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            cy.wrap(response.body).should('have.length', 100);
            expect(response.body[3].title).to.be.equal('eum et est occaecati');
        })
    })

    it('Requet - GET - /comments', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/comments').its('body').should('have.length', 500);
        cy.request('GET', 'https://jsonplaceholder.typicode.com/comments').its('body[7].name').should('equal', 'et omnis dolorem');
        cy.request('GET', 'https://jsonplaceholder.typicode.com/comments').its('body[3].email').should('equal', 'Lew@alysha.tv');
    })

    it('Request - POST', () => {
        const newPost = {
            title: 'Generators are artificial intelligence programs.',
            body: 'grab',
            userId: 2
        }
        cy.request('POST', 'https://jsonplaceholder.typicode.com/users', newPost).as('postResponse')
        cy.get('@postResponse').its('body.title').should('equal', newPost.title);
        cy.get('@postResponse').its('body.body').should('equal', newPost.body);
    })
})