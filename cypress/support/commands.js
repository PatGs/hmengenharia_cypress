import { faker } from '@faker-js/faker/locale/pt_BR';

Cypress.Commands.add('formInput', (nome,email,whatsapp) => {
      //Aceitação de cookies
      cy.get('h2', {timeout: 15000})
        .should('contain.text', 'Aviso de cookies');        
      cy.wait(5000)
      cy.get('button[id="onetrust-accept-btn-handler"]').click();

      //Aguardar e verificar o texto antes do formulário
      cy.get('.text-3xl.font-bold.uppercase', {timeout: 15000})
        .should('contain.text', 'Cadastre-se e receba mais informações');

      //Preenchimento do formulário
      cy.get('input[id="nome"]').type(faker.person.fullName(nome));
      cy.get('input[id="email"]').type(faker.internet.email(email));
      cy.get('input[id="whatsapp"]').type(faker.phone.number(whatsapp));
      cy.get('button[type="submit"]').click();

      cy.get('.text-title-3', {timeout: 10000})
        .should('contain.text', 'Mensagem enviada Com sucesso! ');
})