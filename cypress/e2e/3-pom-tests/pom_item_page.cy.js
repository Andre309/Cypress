import LoginPage from '../../support/POM/LoginPage';
import ItemPage from '../../support/POM/ItemPage';
import InventoryPage from '../../support/POM/InventoryPage';
import testData from '../../fixtures/credentials.json';

describe('Inventory Page tests with POM', () => {
    beforeEach(() => {
        LoginPage.open();
        LoginPage.login(testData.userNames.correctUsername, testData.userPasswords.correctPassword);
        cy.url().should('include', 'inventory.html');
        InventoryPage.openItemPage('Sauce Labs Bolt T-Shirt');
    })

    it('Check for the presence of image', () => {
        ItemPage.img.should('exist');
    })

    it('Check for the presence of price', () => {
        ItemPage.price.should('exist');
        ItemPage.price.should('have.text', '$15.99');
    })

    it('Check for the presence of item name', () => {
        ItemPage.itemName.should('have.text', 'Sauce Labs Bolt T-Shirt');
    })

    it('Check for the presence of description', () => {
        ItemPage.description.should('have.text', 'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.');
    })

    it('Check button "Add to cart"', () => {
        ItemPage.addToCart.click();
        ItemPage.remove.should('be.visible');
    })

    it('Check button "Remove"', () => {
        ItemPage.addToCart.click();
        ItemPage.remove.click();
        ItemPage.addToCart.should('be.visible');
    })
})