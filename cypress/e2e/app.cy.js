describe('App UI Test', () => {
  it('Increments counter', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Increment').click();
    cy.get('[data-testid="count"]').should('contain', '1');
  });
});
