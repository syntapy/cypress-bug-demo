function setViewport(width, height) {
  Cypress.config('viewportWidth', width)
  Cypress.config('viewportHeight', height)
}

describe('Sample Tests', () => {
  it('viewport change', () => {
    cy.visit('/')
    const vpWidth = Cypress.config('viewportWidth')
    const vpHeight = Cypress.config('viewportHeight')
    cy.wrap(vpWidth).should('not.be.undefined')
    cy.wrap(vpHeight).should('not.be.undefined')

    cy.setViewport(vpWidth+100, vpHeight+100)   // does NOT work
    cy.viewport(vpWidth+100, vpHeight+100)      // does NOT work

    setViewport(vpWidth+100, vpHeight+100)      // WORKS

    const vpWidthNew = Cypress.config('viewportWidth')
    const vpHeightNew = Cypress.config('viewportHeight')

    cy.wrap(vpWidthNew).should('equal', vpWidth+100)    // FAILS if line 16 commented out
    cy.wrap(vpHeightNew).should('equal', vpHeight+100)  // FAILS if line 16 & 21 commented out
  })
})
