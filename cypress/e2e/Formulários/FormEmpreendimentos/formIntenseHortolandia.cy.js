import { faker } from '@faker-js/faker/locale/pt_BR';

describe('Testar a página do empreendimento HM Intense Hortolândia', () => {
    const usuario = {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        whatsapp: faker.phone.number(),
      }

      it('Deve realizar o envio do Formulário corretamente.', () => {
        cy.visit('/imoveis/hm-intense-hortolandia');
        cy.viewport(1200, 990);

        cy.formInput(usuario.nome, usuario.email, usuario.whatsapp);

        // Confirmação do redirecionamento ou sucesso
        cy.location('pathname', { timeout: 15000 }).should('include', '/envio-sucesso');

        cy.request({
            method: 'GET',
            url: 'https://eme-front.devhagens.com.br/envio-sucesso',
            failsonStatusCode: false
        }).then((resposta) => {
            expect(resposta.status).to.eq(200);
            })
      });

// Contexto para interceptar solicitações de rede durante o teste
context('Interceptando solicitações de rede', () => {
    // Teste para verificar a interceptação de uma solicitação POST ao enviar o formulário
    it('Deve fazer a interceptação do POST ao realizar o input do Formulário', () => {
        // Acessa a página específica onde o formulário está localizado
        cy.visit('/imoveis/hm-intense-hortolandia');
        
        // Define a dimensão da viewport para uma experiência de visualização específica (desktop)
        cy.viewport(1200, 990);

        // Intercepta a solicitação POST que será enviada ao backend ao submeter o formulário
        // Dá um alias para a solicitação interceptada para facilitar o rastreamento
        cy.intercept('POST', '/api/forms/lead').as('formRequest');

        // Preenche e envia o formulário usando o comando customizado `formInput`
        cy.formInput(usuario.nome, usuario.email, usuario.whatsapp);

        // Aguarda a solicitação interceptada e modifica a resposta simulada
        cy.wait('@formRequest').then((interception) => {
            // Define a resposta simulada para a interceptação com código de sucesso e uma mensagem de resposta
            interception.response = {
                statusCode: 200, // Código de sucesso
                body: {
                    success: true, // Confirmação do sucesso
                    message: 'Mensagem enviada Com sucesso!', // Mensagem de resposta de sucesso
                }
            };
        });

        // Recarrega a página para verificar se o conteúdo esperado aparece após a submissão
        cy.visit('/imoveis/hm-intense-hortolandia');

        // Verifica se o título da página contém o texto específico, confirmando o carregamento correto
        cy.get('h1')
          .should('contain.text', 'VIVA COM QUALIDADE DE VIDA NO HM INTENSE HORTOLÂNDIA');
    });
});
})
