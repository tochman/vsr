/* eslint-disable no-undef */
describe('Application', () => { 

  before(() => {
    cy.visit('/')
  });

  describe('Header', () => {
    it('is expected to display items', () => {
      const items = [ 'Mission', 'Agenda']
      cy.get('[data-cy=header]').within(()=>{
        items.forEach(item => {
          cy.contains(item).should('be.visible')
        })
      })
    });
  });

describe('Navigate to Mission', () => {
  it.only('is expected to display the mission view', () => {
    cy.contains('Mission').click()
    cy.url().should('include', '/mission')
  });
});

 })