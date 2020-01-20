import './commands'

beforeEach(() => {
  cy.server()
  cy.route({ method: 'GET', url: 'http://localhost:5000/api/v1/carnets', status: 200, response: 'fixture:Carnets/carnets.json' })
})