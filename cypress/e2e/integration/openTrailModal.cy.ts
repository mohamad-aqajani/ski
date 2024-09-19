describe('Open trail data modal and reserve a trail', () => {
  it('Should load list of trails and click on first element, then open a modal and reserve the trail', () => {

    cy.get('[data-cy="list-trails"]', { timeout: 5000 })
      .should('be.visible')
      .first()
      .then(() => {
        // Click the first item to open the modal
        cy.get('[data-cy="list-item-card"]').first().click()

        cy.get('[data-cy="trail-details-modal"]', { timeout: 3000 }).should(
          'be.visible'
        )
        //click on the reserve button
        cy.get('[data-cy="reserve-button"]').click()
        cy.get('[data-cy="trail-details-modal"]', { timeout: 1000 }).should('be.hidden')
        
        // now the dom should cotain a text ''Trail Reserved!''
        cy.contains('Trail Reserved!').should('be.visible')

      })

  })
})
