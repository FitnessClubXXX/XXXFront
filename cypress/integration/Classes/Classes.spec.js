describe('Classes Screen', () => {
  it ('Classes header', () => {
    cy.showClasses()
    cy.get('#logoBtn').should('be', 'visible')
    cy.get('#loginBtn').should('be', 'visible')
    cy.get('#accountBtn').should('be', 'visible')
    cy.get('#classesBtn').should('be', 'visible')
  })

  it ('Displays class table', () => {
    cy.showClasses()
    cy.get('.ReactTable').should('be', 'visible')
    cy.get('.ReactTable > .rt-table > .rt-thead > div > div').should('have.length', '6')
  })
})