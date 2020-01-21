describe('Home Page', () => {
  it ('Displays header', () => {
    cy.visit('http://localhost:3000/home')
    cy.get('#logoBtn').should('be', 'visible')
    cy.get('#loginBtn').should('be', 'visible')
    cy.get('#accountBtn').should('be', 'visible')
    cy.get('#classesBtn').should('be', 'visible')
  })

  it ('Displays main photo', () => {
    cy.visit('http://localhost:3000/home')
    cy.get('#homePhoto').should('be', 'visible')
    cy.get('#capturePictureHeading').should('be', 'visible')
    cy.get('#unassignedLink').should('be', 'visible')
    cy.get('#featureMessage').should('be', 'visible')
  })
})