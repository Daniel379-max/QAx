const { defineConfig } = require("cypress");
<<<<<<< HEAD

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
=======
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl:'http://localhost:8080',
    env:{
      apiUrl: 'http://localhost:3333',
    },

    viewportWidth: 1920,
    viewportHeight:1080,
    
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
      // implement node event listeners here
    },
  },
  video:true,
>>>>>>> branch-teste-codigo
});
