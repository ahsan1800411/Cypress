/// <reference types='Cypress'/>

describe('Contact form', () => {
  it('should submit the form', () => {
    cy.visit('http://127.0.0.1:5173/about');
    cy.get('[data-cy="contact-input-message"]').type('Hello World');
    cy.get('[data-cy="contact-input-name"]').type('Ahsan Mumtaz');
    cy.get('[data-cy="contact-input-email"]').type('ahsa@gmail.com{enter}');

    cy.get('[data-cy="contact-btn-submit"]').as('submitBtn');
    cy.get('@submitBtn')
      .click()
      .contains('Sending')
      .should('have.attr', 'disabled');
    // cy.get('@submitBtn').then((el) => {
    //   expect(el.text()).to.eq('Sending..');
    // });
  });
  it('should validate the form', () => {
    cy.visit('http://127.0.0.1:5173/about');
    cy.get('[data-cy="contact-btn-submit"]').click();
    cy.get('[data-cy="contact-btn-submit"]').then((el) => {
      expect(el).to.not.have.attr('disabled');
    });
    cy.get('[data-cy="contact-btn-submit"]').contains('Send Message');
    cy.get('[data-cy="contact-input-message"]')
      .blur()
      .parent()
      // .then((el) => {
      //   expect(el.attr('class')).to.contains('invalid');
      // });
      .should('have.attr', 'class')
      .should('match', /invalid/);
  });
});
