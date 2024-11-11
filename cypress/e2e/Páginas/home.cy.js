describe('Testar a página Home', () => {

  it('Deve permitir navegar pela página home', () => {
      cy.visit('/');
      cy.viewport(1200, 990);

      

  });
})
