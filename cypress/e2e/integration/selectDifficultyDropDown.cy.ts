describe('Select Difficulty Dropdown', () => {
  it('Should load the homepage on http://localhost:3000', () => {
    cy.get('[data-cy="trail-level-select"]', { timeout: 5000 })
      .should('be.visible')
      .click();
    cy.get('[data-cy="difficulty-level-option"]').should('have.length', 4);
  });
});
