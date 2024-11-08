import { faker } from '@faker-js/faker/locale/pt_BR';

Cypress.Commands.add('form', (nome,email,whatsapp) =>{
    cy.session([nome,email,whatsapp], ()=>{
        cy.visit('/imoveis/hm-campos-eliseos');
        cy.get('h2', {timeout: 15000})
          .should('contain.text', 'Aviso de cookies');        
        cy.wait(5000)
        cy.get('button[id="onetrust-accept-btn-handler"]').click();

        cy.get('h3', {timeout: 15000})
          .eq(10)
          .should('contain.text', 'Cadastre-se e receba mais informações');
        cy.get('input[id="nome"]').type(faker.person.fullName(nome));
        cy.get('input[id="email"]').type(faker.internet.email(email));
        cy.get('input[id="whatsapp"]').type(faker.phone.number(whatsapp));
        cy.get('button[type="submit"]').click()
    })
})