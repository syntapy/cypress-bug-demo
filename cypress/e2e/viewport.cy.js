describe('Sample Tests', () => {
  it('viewport change', () => {
    cy.visit('/')
    const vpWidth = Cypress.config('viewportWidth')
    const vpHeight = Cypress.config('viewportHeight')
    cy.wrap(vpWidth).should('not.be.undefined')
    cy.wrap(vpHeight).should('not.be.undefined')

    //cy.viewport(vpWidth+100, vpHeight+100)
    Cypress.config('viewportWidth', vpWidth+100)
    Cypress.config('viewportHeight', vpHeight+100)

    const vpWidthNew = Cypress.config('viewportWidth')
    const vpHeightNew = Cypress.config('viewportHeight')

    cy.wrap(vpWidthNew).should('equal', vpWidth+100)
    cy.wrap(vpHeightNew).should('equal', vpHeight+100)

    //cy.viewport(vpWidth, vpHeight)
    Cypress.config('viewportWidth', vpWidth)
    Cypress.config('viewportHeight', vpHeight)

    const vpWidthOriginal = Cypress.config('viewportWidth')
    const vpHeightOriginal = Cypress.config('viewportHeight')

    cy.wrap(vpWidthOriginal).should('equal', vpWidth)
    cy.wrap(vpHeightOriginal).should('equal', vpHeight)
  })
})
