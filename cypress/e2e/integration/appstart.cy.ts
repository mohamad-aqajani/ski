describe('App Startup', () => {
  it('Should load the homepage on http://localhost:3000', () => {
    // Check if the page loads successfully
    cy.url().should('eq', 'http://localhost:3000/');

    cy.get('[data-cy="groomed-switch-filter"').should('be.visible');

    // Check if the input select field is visible
    cy.get('[data-cy="list-trails"]', { timeout: 5000 }).should(
      'be.visible'
    );

    cy.get('*[data-cy="list-trails"]').should('have.length.greaterThan', 0);
    
    // Check if the switch groom filter is visible
    cy.get('[data-cy="groomed-switch-filter"]').should('be.visible');

    // Check if the filter button is visible
    cy.contains('Clear Filters').should('be.visible');

  });
});
