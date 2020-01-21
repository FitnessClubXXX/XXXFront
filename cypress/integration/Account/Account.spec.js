describe('Account Screen', () => {
  it ('Account header', () => {
    cy.visit('http://localhost:3000/account')
    cy.get('#logoBtn').should('be', 'visible')
    cy.get('#loginBtn').should('be', 'visible')
    cy.get('#accountBtn').should('be', 'visible')
    cy.get('#classesBtn').should('be', 'visible')
  })

  it ('Displays login form', () => {
    cy.visit('http://localhost:3000/account')
    cy.get('#emailInput').type('correct@email.com')
    cy.get('#passwordInput').type('correctPassword')
    cy.get('#accountLoginBtn').click()
    cy.get('#name').should('be', 'visible')
    cy.get('#email').should('have.text', 'correct@email.com')
    cy.get('#showMyCarnetsBtn').click()
    cy.get('.ReactTable').should('be', 'visible')
    cy.get('.ReactTable > .rt-table > .rt-thead > div > div').should('have.length', '5')
  })
})