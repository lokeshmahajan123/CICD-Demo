describe('Cypress Example Test', () => {
  it('visits React app homepage', () => {
    cy.visit('http://localhost:3000');   // app run hone ke baad open karega
    cy.contains('Learn React');          // check karega ki ye text hai ya nahi
  });
});
