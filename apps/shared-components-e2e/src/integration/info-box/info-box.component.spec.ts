describe('shared-components', () => {
  it('should render the component', () => {
    cy.visit(
      '/iframe.html?id=infoboxcomponent--primary&knob-icon=person&knob-message=John'
    );
    cy.get('mat-icon').should('contain', 'person');
    cy.contains('John');
  });
});
