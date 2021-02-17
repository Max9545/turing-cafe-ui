describe('Reservations HomePage', () => {



  it('Should have the correct title for the page', () => {
    cy.visit('http://localhost:3000')
    .get('.app-title').contains('Turing Cafe Reservations')
  })

})