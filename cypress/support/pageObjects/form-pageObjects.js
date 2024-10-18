const elem = require ('../elements/form-elements-pageObjects').ELEMENTS

class Form{

    //Localiza a modal de Cookies e clica no aceite
    avisoCookies() {
        cy.get('h2', {timeout: 15000})
          .should('contain.text', 'Aviso de cookies');
        
        cy.wait(5000)
        cy.get(elem.acctCookie).click();
    }
    //Valida o texto e os campos do formulário
    validartxtForm() {
        cy.get('h3', {timeout: 15000})
          .eq(10)
          .should('contain.text', 'Cadastre-se e receba mais informações');
    }
    inputName(){
        cy.get(elem.inputName).type('Patricia Gomes').type('{enter}');
    }
    inputEmail(){
        cy.get(elem.inputEmail).type('teste@teste.com').type('{enter}');
    }
    inputWhatsApp(){
        cy.get(elem.inputWhatsApp).type('19991438964').type('{enter}');
    }
    submitFor() {
        cy.get(elem.submit).click()
    }



}

export default new Form()