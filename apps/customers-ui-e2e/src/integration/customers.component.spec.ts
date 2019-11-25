describe('customers-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=customerscomponent--primary'));

  it('should render the component', () => {
    cy.get('app-customers').should('exist');
  });
});
