describe('Sample Tests', () => {
  it('viewport', () => {
    cy.visit('/')
    const vpWidth = Cypress.config('viewportWidth')
    const vpHeight = Cypress.config('viewportHeight')
    cy.wrap(vpWidth).should('not.be.undefined')
    //cy.setViewport(vpWidth+100, vpHeight+100)
    Cypress.config('viewportWidth', vpWidth+100)
    Cypress.config('viewportHeight', vpHeight+100)
    const vpWidthNew = Cypress.config('viewportWidth')
    const vpHeightNew = Cypress.config('viewportHeight')

    cy.wrap(vpWidthNew).should('equal', vpWidth+100)
    cy.wrap(vpHeightNew).should('equal', vpHeight+100)
    //cy.setViewport(vpWidth, vpHeight)
    Cypress.config('viewportWidth', vpWidth)
    Cypress.config('viewportHeight', vpHeight)
  })

  it('loads the homepage', () => {
    cy.visit('/')
    cy.get('h1').contains('Welcome to the-internet') // Implicit assertion
    cy.get('ul li a').its('length').should('be.at.least', 44) // Explicit assertion
  })

  it('can login', () => {
    cy.fixture('auth').then((auth) => { // Retrieve auth.json fixture from fixtures folder
      cy.login(auth.testUser, auth.testPass)
    })
    // cy.getCookie('session').should('exist')
    cy.get('div#flash').should('contain.text', 'You logged into a secure area!')
    cy.get('h2').should('contain.text', 'Secure Area')
    cy.get('a.button[href="/logout"]').should('be.visible')
  })
})
