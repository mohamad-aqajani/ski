describe('App Startup', () => {
 it('Should load the homepage on http://localhost:3000', () => {
  // Check if the page loads successfully
  cy.url().should('eq', 'http://localhost:3000/')

  cy.contains('Find Your Perfect Trail!').should('be.visible')

  // Check if the input select field is visible
  cy
   .get('[data-cy="trail-level-select"]', { timeout: 5000 })
   .should('be.visible')

  // Check if the input number field is visible
  cy.get('[data-cy="load-trails"]').should('be.visible')
 })
})
