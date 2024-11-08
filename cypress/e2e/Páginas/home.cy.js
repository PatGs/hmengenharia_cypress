describe('template spec', () => {
  it('passes', () => {
    cy.visit('/envio-sucesso')

    
cy.get('.text-title-3', {timeout: 10000})
.should('contain.text', 'Mensagem enviada Com sucesso! ');

cy.wait(5000)

  })
})