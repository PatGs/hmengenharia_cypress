import Form from '../../support/pageObjects/form-pageObjects'

describe('Validar os formulários da página dos empreendimentos', () => {
    beforeEach(()=>{
        cy.visit('/imoveis/hm-campos-eliseos')
      })

    it('Validar o formulário', () => {
        Form.avisoCookies();
        Form.validartxtForm();
        Form.inputName();
        Form.inputEmail();
        Form.inputWhatsApp();
        Form.submitFor();

    });




  })