describe('Trails loading', () => {
    it('Should load trails by click on load button', () => {
        cy.get('[data-cy="load-trails"]', { timeout: 5000 }).click()
        cy.get('*[class^="ant-table-row"]').should('have.length.greaterThan', 0)

        cy.get('*[class^="ant-table-row"]').eq(9).click()
        cy.get('[data-cy="success-modal"]').should('be.visible')
    })
})
