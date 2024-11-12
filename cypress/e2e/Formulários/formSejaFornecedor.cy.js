describe('Testar a página Seja um Fornecedor', () => {

    it('Deve permitir enviar o formulário de Seja um fornecedor', () => {
        cy.visit('/seja-um-fornecedor');
        cy.viewport(1200, 990);

      //Aceitação de cookies
      cy.get('h2', {timeout: 15000}).eq(1)
        .should('contain.text', 'Aviso de cookies');        
      cy.wait(5000)
      cy.get('button[id="onetrust-accept-btn-handler"]').click();

        cy.get('h2').eq(0)
        .should('contain.text', 'Seja um fornecedor')

      cy.get('.text-3xl.font-bold.uppercase')
      .should('contain.text', 'Dados da empresa');

    });
})