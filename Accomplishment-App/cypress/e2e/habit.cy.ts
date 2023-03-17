/// <reference types='cypress'/>

describe('Locate different Element', () => {
  // beforeEach(() => {
  //   cy.visit('/habits');
  // });
  // it('should display the modal', () => {
  //   // cy.get("[data-cy='btn-id-1']").contains('Button With');
  //   // cy.get("[data-cy='btn-id-1']").should('contain.text', 'Button With');
  //   cy.get('#habit-add-btn').click();
  //   cy.contains('Add a new ').should('be.visible');
  //   cy.get('.form-control').type('Reading');
  //   cy.contains('button', 'Save Changes').click();
  //   cy.contains('Reading')
  //     .should('be.visible')
  //     .should('have.class', 'HabitCard__habit-container');
  //   cy.contains('Reading').click();
  // });

  beforeEach(() => {
    cy.visit('/accomplishments');
  });
  it('test accomplishments and show  error if type nothing', () => {
    cy.get('[data-cy="accomplishment-title-input"]').type('Got a Degree');
    cy.get('[data-cy="accomplishment-input"]').type('Got a Degree of 4.0');
    cy.get('[data-cy="accomplishment-checkbox"]').click();
    cy.get('.Accomplishment-btn').click();
    // cy.contains('Complete the items above to continue').should('be.visible');
    cy.contains('This Accomplisment was Successfully Submitted').should(
      'be.visible'
    );
    cy.contains('Go Back').click();
    cy.contains('h2', 'Accomplishment').should('be.visible');
    cy.get('[data-cy="accomplishment-title-input"]').should('have.value', '');
  });
});
