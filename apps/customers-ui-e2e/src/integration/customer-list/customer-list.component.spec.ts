describe('customers-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=customerlistcomponent--primary'));

  it('should render the component', () => {
    cy.get('app-customer-list').should('exist');
  });
});
