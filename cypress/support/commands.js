import { faker } from '@faker-js/faker/locale/pt_BR';
//import Form from '../../support/pageObjects/form-pageObjects'

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

Cypress.Commands.add('vendaArea', (nome,phone,email) => {
  // function gerarCPF() {
  //     const rand = () => Math.floor(Math.random() * 9);
  //     const cpf = Array.from({ length: 9 }, rand).join('');
    
  //     const calcularDigito = (cpf, posicoes = 10) => {
  //         const soma = cpf.split('')
  //                         .map((num, idx) => num * (posicoes - idx))
  //                         .reduce((acc, val) => acc + val, 0);
  //         const digito = (soma * 10) % 11;
  //         return digito === 10 ? 0 : digito;
  //     };
    
  //     const digito1 = calcularDigito(cpf);
  //     const digito2 = calcularDigito(cpf + digito1, 11);
    
  //     return `${cpf}${digito1}${digito2}`;
  // }

  // // CPF gerado
  // const cpfGerado = gerarCPF();
  // console.log(`CPF gerado: ${cpfGerado}`);

  cy.get('.text-3xl.font-bold.uppercase')
    .should('contain.text', 'Informações pessoais');

  cy.get('#name').type(faker.person.fullName(nome));
  //cy.get('input[id="cpf"]').type(cpfGerado);
  cy.get('input[id="phone"]').type(faker.phone.number(phone));
  cy.get('input[id="email"]').type(faker.internet.email(email));
  cy.get('button[type="submit"]').click();  // Ajuste do tipo do botão
});