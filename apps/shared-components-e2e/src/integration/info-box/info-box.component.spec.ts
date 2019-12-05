describe('shared-components', () => {
  beforeEach(() => {
    cy.viewport(400, 400);
  });
  it('should show John', () => {
    cy.visit(
      '/iframe.html?id=infoboxcomponent--primary&knob-icon=person&knob-message=John'
    );
    cy.get('mat-icon').should('contain', 'person');
    cy.contains('John');
  });
  it('should show Bob', () => {
    cy.visit(
      '/iframe.html?id=infoboxcomponent--primary&knob-icon=person&knob-message=Bob'
    );
    cy.get('mat-icon').should('contain', 'person');
    cy.contains('Bob');
  });
});
