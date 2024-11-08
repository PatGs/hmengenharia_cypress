import Form from '../../support/pageObjects/form-pageObjects'
import { faker } from '@faker-js/faker/locale/pt_BR';

  describe('Testar todos os formulários de todos os empreendimentos.', () => {
    const usuario = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      whatsapp: faker.phone.number(),
    }

    it('Validar o formulário do HM Campos Eliseos', () => {
      cy.visit('/imoveis/hm-campos-eliseos')
      cy.viewport(1200, 990);

      Form.avisoCookies();
      Form.validartxtForm();
      cy.get('input[id="nome"]').type(faker.person.fullName());
      cy.get('input[id="email"]').type(faker.internet.email());
      cy.get('input[id="whatsapp"]').type(faker.phone.number());
      Form.submitFor();

      cy.get('.text-title-3', {timeout: 10000})
        .should('contain.text', 'Mensagem enviada Com sucesso! ');
      cy.location('pathname').should('eq', '/envio-sucesso'); // Verifica o caminho da URL de Mensagem com sucesso.
    
      // Requisição para verificar o envio do formulário
      cy.request({
        method: 'GET',
        url: 'https://eme-front.devhagens.com.br/envio-sucesso',
        failOnStatusCode: false
      }).then((resposta) => {
        expect(resposta.status).to.eq(200);
        // // Verifica se o tipo de conteúdo é JSON
        // expect(resposta.headers['content-type']).to.include('application/json');
      
        // if (resposta.body && resposta.body.data && resposta.body.data.usuario) {
        //   const lastUserData = resposta.body.data.usuario;
        //   expect(lastUserData).to.include({
        //     nome: usuario.nome,
        //     // Outros campos que deseja validar
        //   });
        // } else {
        //   throw new Error('Resposta não contém os dados esperados de usuário.');
        // }
      });
    });

    context('Interceptando solicitações de rede', ()=>{

      it.only('Deve fazer a interceptação do POST ao realizar o input do Formulário', () => {
        // cy.visit('/imoveis/hm-campos-eliseos');
        // //Form.avisoCookies();
        cy.intercept('POST', '/api/forms/lead').as('formRequest');
        cy.form(usuario.nome, usuario.email, usuario.whatsapp);
        cy.wait('@formRequest').then((interception) =>{
          interception.response = {
            statusCode: 200,
            body: {
              sucess: true,
              message: 'Mensagem enviada Com sucesso!',
            }
          }
        });

        cy.visit('/imoveis/hm-campos-eliseos');
        cy.get('h1')
          .should('contain.text', 'VIVA DO SEU JEITO NO HM CAMPOS ELÍSEOS');
      });
    })  
  })
  









  // Validação antiga
  //describe('Validar os formulários da página dos empreendimentos', () => {
//     beforeEach(()=>{
//         cy.visit('/imoveis/hm-campos-eliseos')
//       })

//     it('Validar o formulário do HM Intense Campos Elíseos', () => {
//         Form.avisoCookies();
//         Form.validartxtForm();
//         Form.inputName();
//         Form.inputEmail();
//         Form.inputWhatsApp();
//         Form.submitFor();

//     });   
//   })