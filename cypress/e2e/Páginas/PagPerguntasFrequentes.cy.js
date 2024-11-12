describe('Testar a página Perguntas Frequentes', () => {

    it('Deve permitir clicar nas perguntas e exibir os resultados abaixo', () => {
        cy.visit('/perguntas-frequentes');
        cy.viewport(1200, 990);

      //Aceitação de cookies
      cy.get('h2', {timeout: 15000})
        .should('contain.text', 'Aviso de cookies');        
      cy.wait(5000)
      cy.get('button[id="onetrust-accept-btn-handler"]').click();

      cy.get('h2').eq(0)
        .should('contain.text', 'Perguntas Frequentes')

      //Verifica o tópico Canais de Comunicação e clica nas perguntas  
      cy.get('.bg-gray-dark > .text-body-1')
      .should('contain.text', 'Canais de Comunicação')
      .click()
      cy.contains('button', 'Qual o portal do cliente HM?').click();
      cy.contains('button', 'Qual o telefone da HM Engenharia?').click();

      //Verifica o tópico Formas de Pagamento e clica nas perguntas  
      cy.get(':nth-child(2) > .text-body-1')
      .should('contain.text', 'Formas de pagamento')
      .click()
      cy.contains('button', 'Como funcionam os boletos da HM Engenharia e regras de pagamento?').click();
      cy.contains('button', 'Posso pagar um boleto da HM Engenharia usando PIX?').click();
    
      //Verifica o tópico Correção monetária e clica nas perguntas  
      cy.get(':nth-child(3) > .text-body-1')
      .should('contain.text', 'Correção monetária')
      .click()
      cy.contains('button', 'O que é correção monetária?').click();
      cy.contains('button', 'Como é aplicada a correção?').click();

      //Verifica o tópico Processo de financiamento e clica nas perguntas  
      cy.get(':nth-child(4) > .text-body-1')
        .should('contain.text', 'Processo de financiamento')
        .click()
      cy.contains('button', 'Quando serei chamado para assinar meu contrato de financiamento?').click();
      cy.contains('button', 'Como funciona a entrada da Construtora/Incorporadora?').click();

      //Verifica o tópico Obra e clica nas perguntas  
      cy.get(':nth-child(5) > .text-body-1')
        .should('contain.text', 'Obra')
        .click()
      cy.contains('button', 'Quando a construtora pode começar a obra?').click();
      cy.contains('button', 'É possível visitar a obra durante a construção?').click();

      //Verifica o tópico Entrega das Chaves e clica nas perguntas  
      cy.get(':nth-child(6) > .text-body-1')
      .should('contain.text', 'Entrega das Chaves')
      .click()
      cy.contains('button', 'Qual o prazo para entrega de chaves?').click();
      cy.contains('button', 'E se houver alteração no cronograma de entregas das obras?').click();


      //Verifica o tópico Vistoria Final da Unidade e clica nas perguntas  
      cy.get(':nth-child(7) > .text-body-1')
      .should('contain.text', 'Vistoria Final da Unidade')
      .click()
      cy.contains('button', 'O que é vistoria de entrega?').click();
      cy.contains('button', 'Quando poderia vistoriar minha unidade?').click();

      //Verifica o tópico Outros assuntos da Unidade e clica nas perguntas  
      cy.get(':nth-child(8) > .text-body-1')
      .should('contain.text', 'Outros assuntos')
      .click()
      cy.contains('button', 'O que é AGI?').click();
      cy.contains('button', 'Os empreendimentos entregues possuem garantias?').click();


    });

    it('Deve realizar a pesquisa pelo campo de busca, e o resultado por qualquer assunto! ', () => {
        cy.visit('/perguntas-frequentes');
        cy.viewport(1200, 990);

        //Aceitação de cookies
        cy.get('h2', {timeout: 15000})
          .should('contain.text', 'Aviso de cookies');        
        cy.wait(5000)
        cy.get('button[id="onetrust-accept-btn-handler"]').click();

        cy.get('h2').eq(0)
          .should('contain.text', 'Perguntas Frequentes')

        //Clica no campo de Pesquisar/Busca e digita Obra  
        cy.get('input.border-stone-900')
          .click()
          .type('Obra');

        // Seleciona o primeiro elemento da lista e clica nele
        cy.get('.w-5\\/6.lg\\:w-11\\/12')
          .eq(0) 
          .should('be.visible')
          .click();

        cy.get('.py') // Verifica se o conteúdo de busca foi carregado
          .should('be.visible'); // Aguarda o elemento ser visível

        // Aguarde um pouco mais caso o conteúdo esteja sendo carregado
        cy.wait(1000);

        // Verifica se o texto "Obra" da pesquisa apresenta no resultado do texto
        cy.contains('Obra')
          .should('be.visible');

        //Clica no campo de Pesquisar/Busca e digita Chaves  
        cy.get('input.border-stone-900')
          .click()
          .clear() //Limpa o texto existente
          .type('Chaves');

        // Seleciona o primeiro elemento da lista e clica nele
        cy.get('.w-5\\/6.lg\\:w-11\\/12')
          .eq(0) 
          .should('be.visible')
          .click();

        cy.get('.py') // Verifica se o conteúdo de busca foi carregado
          .should('be.visible'); // Aguarda o elemento ser visível

        // Aguarde um pouco mais caso o conteúdo esteja sendo carregado
        cy.wait(1000);

        // Verifica se o texto "Chaves" da pesquisa apresenta no resultado do texto
        cy.contains('Chaves')
          .should('be.visible');

    });

    it.only('Deve exibir mensagem quando não encontra o resultado', () => {
        cy.visit('/perguntas-frequentes');
        cy.viewport(1200, 990);


        //Aceitação de cookies
        cy.get('h2', {timeout: 15000})
          .should('contain.text', 'Aviso de cookies');        
        cy.wait(5000)
        cy.get('button[id="onetrust-accept-btn-handler"]').click();

        cy.get('h2').eq(0)
          .should('contain.text', 'Perguntas Frequentes')

        //Clica no campo de Pesquisar/Busca e digita Teste  
        cy.get('input.border-stone-900')
          .click()
          .type('Teste');

        cy.get('.text-title-3.emeNotFound.w-full')
          .should('exist', 'Desculpe, não encontramos resultados. Tente uma busca diferente ou entre em contato conosco para obter ajuda.')

    })

    
})