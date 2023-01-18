Cypress.on('viewport:changed', (newValue) => {
  Cypress.config('viewportWidth', newValue.viewportWidth)
  Cypress.config('viewportHeight', newValue.viewportHeight)
})

Cypress.Commands.add('setViewport', (viewportWidth, viewportHeight) => {
  cy.viewport(viewportWidth, viewportHeight)
  Cypress.config('viewportWidth', viewportWidth)
  Cypress.config('viewportHeight', viewportHeight)
})
