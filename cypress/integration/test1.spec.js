it('test', () => {
    let counter = 0;
    cy.document().then(doc => {
        doc.body.innerHTML = `
           <button id="elementId_0">Hello</button>
           <button id="elementId_1">Hello</button>
           <button id="elementId_2">Hello</button>
           <button id="elementId_3">Hello</button>
           <button id="elementId_4">Hello</button>
        `;
        Cypress.$('button').on('click', () => counter++);
    });
    for (let i = 0; i < 5; i++) {
        cy.get('#elementId_' + i).click();
    }
    cy.then(() => {
        expect(counter).to.eq(5);
    });
});