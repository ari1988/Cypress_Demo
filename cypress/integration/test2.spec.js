/// <reference types="Cypress"/>
const userData = require('../fixtures/Users.json')

it('basic verification', () => {
    const result = userData.find(({
        name
    }) => name === 'Leanne Graham');

    cy.log(result.phone)
})