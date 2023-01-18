Cypress.Commands.add('setViewport', (viewportWidth, viewportHeight) => {
  cy.viewport(viewportWidth, viewportHeight)
  Cypress.config('viewportWidth', viewportWidth)
  Cypress.config('viewportHeight', viewportHeight)
})
