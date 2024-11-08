const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   baseUrl: 'https://eme-front.devhagens.com.br/',
   video: true, 
  },

  viewportWidth: 1200,
  viewportHeight: 990,
});
