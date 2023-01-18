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

    cy.setViewport(vpWidth+100, vpHeight+100)   // custom command: does not work
    cy.viewport(vpWidth+100, vpHeight+100)      // does not work
    setViewport(vpWidth+100, vpHeight+100)      // works

    const vpWidthNew = Cypress.config('viewportWidth')
    const vpHeightNew = Cypress.config('viewportHeight')

    cy.wrap(vpWidthNew).should('equal', vpWidth+100)
    cy.wrap(vpHeightNew).should('equal', vpHeight+100)

    cy.setViewport(vpWidth, vpHeight)       // custom command: does not work
    cy.viewport(vpWidth, vpHeight)          // does not work
    setViewport(vpWidth, vpHeight)          // works

    const vpWidthOriginal = Cypress.config('viewportWidth')
    const vpHeightOriginal = Cypress.config('viewportHeight')

    cy.wrap(vpWidthOriginal).should('equal', vpWidth)
    cy.wrap(vpHeightOriginal).should('equal', vpHeight)
  })
})
