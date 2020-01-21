Cypress.Commands.add('showProductScreen', () => {
  cy.route({ method: 'GET', url: 'products/1', status: 200, response: 'fixture:Products/product.json' })

  cy.visit('http://localhost:3000/products/1')
})

Cypress.Commands.add('showClasses', () => {
  cy.route({ method: 'GET', url: 'classes', status: 200, response: 'fixture:Classes/classes.json' })

  cy.visit('http://localhost:3000/classes')
})
