describe('Reservations HomePage', () => {

    beforeEach(function() {
      cy.visit('http://localhost:3000')
    })

  it('Should have the correct title for the page', () => {
    cy
    .get('.app-title').contains('Turing Cafe Reservations')
  })
  it('Should have the correct reservation info for the first card for the page', () => {
    cy
    .get('.res-name').contains('Christie')
    .get('.res-date-and-time').contains('12/29 at 7:00')
    .get('.res-number-of-guests').contains('12')
  })
  it('Should be able to make a reservaiton that is then displayed on the page', () => {
    cy
    .get('.name-field')
    .type('Max B')
    .get('.date-field')
    .type('11/7')
    .get('.time-field')
    .type('6:00')
    .get('.number-field')
    .type('4')
    .get('.make-reservation-button').click()
    .get('.res-card').last
    .get('.res-name').contains('Max B')
    .get('.res-date-and-time').contains('11/7 at 6:00')
    .get('.res-number-of-guests').contains('4')
  })
})