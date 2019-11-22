describe('home', () => {
  beforeEach(() => cy.login('test', 'goodpass'));

  it('should display correctly', () => {
    cy.findByText('Welcome to the Demo App');
    cy.findByText('🥳 Customer of the day');
    cy.contains('mat-icon', 'person');
  });
});
