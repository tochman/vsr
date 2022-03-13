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
 })