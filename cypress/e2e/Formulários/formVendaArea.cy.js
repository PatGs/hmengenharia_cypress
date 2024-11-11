describe('Testar a página de venda sua área', () => {

    it('Deve permitir enviar o formulário de Venda a sua área', () => {
        cy.visit('/venda-sua-area');
        cy.viewport(1200, 990);

        // cy.get('#onetrust-policy-title')
        // .invoke('show')
        // .should('be.visible')
        // .and('contain.text', 'Aviso de cookies');       
        // cy.wait(10000)
        // cy.get('button[id="onetrust-accept-btn-handler"]').click();

        cy.get('h2').eq(0)
          .should('contain.text', 'Venda sua área')

        cy.get('.text-3xl.font-bold.uppercase')
        .should('contain.text', 'Informações pessoais');


        //cy.get('#name').should('be.visible').type('Teste Patricia').type('{enter}');
        //cy.get('input[name="name"]').should('be.visible').type('Teste Patricia');
        //cy.get('#name').should('exist').should('be.visible').type('Teste Patricia');
        // cy.get('#name').then(($el) => {
        //     console.log("DEBUG NAME", $el);
        // }).type('Teste Patricia');

        //cy.get('#name').focus().type('Teste Patricia');

        //cy.get('#name').clear().type('Teste Patricia');

        //cy.get('#name').focus().debug().type('Teste Patricia');

        cy.get('.button.btn-black.max-w-max.bg-gray-dark')
        .should('be.visible')
        .click();
    });
})
