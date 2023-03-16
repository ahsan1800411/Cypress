/// <reference types='Cypress'/>

describe('navigation', () => {
  it('should go to the About Page', () => {
    cy.visit('http://127.0.0.1:5173/');
    cy.get('[data-cy="header-about-link"]').click();
    cy.location('pathname').should('eq', '/about');
    cy.go('back');
    cy.location('pathname').should('eq', '/');
    cy.get('[data-cy="header-home-link"]').click();
    cy.location('pathname').should('eq', '/');
  });
});

import * as XLSX from 'xlsx';

describe('Example Test', () => {
  it('loads and parses xlsx file', () => {
    cy.fixture('example.xlsx', {parse: false}).then((fileContent) => {
      // Parse the file content using xlsx library
      const workbook = XLSX.read(fileContent, {type: 'binary'});
      const sheet = workbook.Sheets['Sheet1'];
      const data = XLSX.utils.sheet_to_json(sheet);

      // Do something with the parsed data
      expect(data.length).to.equal(2);
      expect(data[0].name).to.equal('John Doe');
      expect(data[0].email).to.equal('johndoe@example.com');
    })
  })
})
