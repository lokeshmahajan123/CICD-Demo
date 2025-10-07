const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    retries: {
      runMode: 2,
      openMode: 1,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
