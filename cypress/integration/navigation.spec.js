/// <reference types="Cypress"/>
const userData = require('../fixtures/UserDetails.json')

describe('Search For a Domain',() => {
    it('Navigates to Network Solutions site', () => {
        cy.clearCookies();
        cy.visit("/");
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })        
        cy.title().should('include',"QA")
    
    });

    it('Creates a New User',() => {
        cy.get('ul#navAM a').last().click()
        cy.get('a:contains("Create New User")').click()
        cy.get('[name="sfUser.userLoginName"]').type(userData.firstName + userData.lastName + Date.now())
        cy.get('[name="sfUser.password"]').type(userData.genericPassword, {log: false})
        cy.get('[name="sfUser.confirmPassword"]').type(userData.genericPassword,{log:false})
        cy.get('[name="challengeQuestion"]').select(userData.securityQuestion)
        cy.get('[name="sfUser.challengeAnswer"]').type(userData.securityAnswer)
        cy.get('[alt="SAVE"]').click({force:true})
       
        
    });

    it('Set Up New user', () => {
        cy.get('[name = "sfUser.firstName"]').type(userData.firstName)
        cy.get('[name="sfUser.lastName"]').type(userData.lastName)
        cy.get('[name="sfUser.streetAddress"]').type(userData.address)
        cy.get('[name="sfUser.city"]').type(userData.city)
        cy.get('[name="sfUser.state"]').type(userData.state)
        cy.get('[name="sfUser.zip"]').type(userData.zipCode)
        cy.get('[name="sfUser.country"]').select(userData.country)
        cy.get('[name="sfUser.email"]').type(userData.email)
        cy.get('[name="sfUser.phoneNum"]').type(userData.phone)
        cy.get('[alt="SAVE"]').click({force:true})
    
        cy.clearCookies()
    });






});