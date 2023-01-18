Cypress.on('viewport:changed', (newValue) => {
  Cypress.config('viewportWidth', newValue.viewportWidth)
  Cypress.config('viewportHeight', newValue.viewportHeight)
})

import './commands'
