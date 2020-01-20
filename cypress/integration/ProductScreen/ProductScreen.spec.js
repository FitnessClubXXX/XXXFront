describe('Product Screen', () => {
  it ('Displays header', () => {
    cy.showProductScreen()
    cy.get('#logoBtn').should('be', 'visible')
    cy.get('#loginBtn').should('be', 'visible')
    cy.get('#accountBtn').should('be', 'visible')
    cy.get('#classesBtn').should('be', 'visible')
  })

  it ('Displays class elements', () => {
    cy.showProductScreen()
    cy.get('#gallery').should('be', 'visible')
    cy.get('#name').should('have.text', 'Yoga 1')
    cy.get('#price').should('have.text', '$22')
    cy.get('#description').should('be', 'visible')
  })
})