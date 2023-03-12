/// <reference types='Cypress'/>

// the differnece between the find and get is that when we chain get the second get will always start from scratch means we don't use it for finding the nested elements like for example we want to find the img in main. for this purpose we have to use the find method

describe('tasks page', () => {
  it('should render the main page', () => {
    cy.visit('http://127.0.0.1:5173/');
    cy.get('.main-header img');
  });
  it('should contains text', () => {
    cy.visit('http://127.0.0.1:5173/');
    cy.contains('React Tasks');
    cy.get('h1').should('have.length', 1);
  });
});
