/// <reference types='Cypress'/>

describe('tasks page', () => {
  it('should should open and close the modal', () => {
    cy.visit('http://127.0.0.1:5173/');
    cy.contains('Add Task').click();
    cy.get('.backdrop').click({ force: true });
    cy.get('.backdrop').should('not.exist');
    cy.get('.modal').should('not.exist');

    cy.contains('Add Task').click();
    cy.contains('Cancel').click();
  });

  it('should create a new task', () => {
    cy.visit('http://127.0.0.1:5173/');
    cy.contains('Add Task').click();
    cy.get('#title').type('New Title');
    cy.get('#summary').type('New Summary');
    cy.get('.modal').contains('Add Task').click();
    cy.get('.backdrop').should('not.exist');
    cy.get('.modal').should('not.exist');
    cy.get('.task h2').contains('New Title');
    cy.get('.task p').contains('New Summary');
  });
  it('should throw a error', () => {
    cy.visit('http://127.0.0.1:5173/');
    cy.contains('Add Task').click();
    cy.get('.modal').contains('Add Task').click();
    cy.contains('Please provide');
  });

  it('should filter tasks', () => {
    cy.visit('http://127.0.0.1:5173/');
    cy.contains('Add Task').click();
    cy.get('#title').type('New Title');
    cy.get('#summary').type('New Summary');
    cy.get('#category').select('urgent');
    cy.get('.modal').contains('Add Task').click();
    cy.get('#filter').select('urgent');
    cy.get('.task').eq(0).contains('New Title');
  });
});
