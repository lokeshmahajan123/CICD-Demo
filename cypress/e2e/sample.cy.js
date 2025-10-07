describe('Cypress Example Test', () => {
  it('visits React app homepage', () => {
    cy.visit('http://localhost:3000/');   // app run hone ke baad open karega
    cy.contains('My React App');          // check karega ki ye text hai ya nahi
  });
});
