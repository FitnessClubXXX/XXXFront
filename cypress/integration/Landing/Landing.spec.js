describe('Landing Page', () => {
  it ('Displays header', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#logoBtn').should('be', 'visible')
    cy.get('#loginBtn').should('be', 'visible')
    cy.get('#accountBtn').should('be', 'visible')
    cy.get('#classesBtn').should('be', 'visible')
  })

  it ('Displays main photo', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#landingPhoto').should('be', 'visible')
    cy.get('#landingHeading').should('be', 'visible')
    cy.get('#landingDescription').should('be', 'visible')
    cy.get('#landingLoginBtn').should('be', 'visible')
    cy.get('#landingAccountBtn').should('be', 'visible')
    cy.get('#landingClassesBtn').should('be', 'visible')
  })

  it ('Displays users recommendation', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.testimonials').should('be', 'visible')
  })

  it ('Display features', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.features').should('be', 'visible')
  })

  it ('Display social proofs', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#Facebook').should('be', 'visible')
    cy.get('#Instagram').should('be', 'visible')
    cy.get('#Twitter').should('be', 'visible')
    cy.get('#WhatsApp').should('be', 'visible')
    cy.get('#Pinterest').should('be', 'visible')
    cy.get('#Whatshot').should('be', 'visible')
  })

  it('Clicking login should open modal', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#loginBtn').click()
    cy.get('#signInDialog').should('be', 'visible')
  })
})