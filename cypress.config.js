const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    // "baseUrl": "https://www.saucedemo.com/",
    // "baseUrl": "https://qauto.forstudy.space/",
     "defaultCommandTimeout": 5000,
    // "fixturesFolder": "cypress/fixtures",
    // "specPattern": "**/*.cy.{js,jsx,ts,tsx}",
    // "viewportWidth": 1280,
    // "viewportHeight": 720,
    // "screenshotsFolder": "cypress/screenshots",
    // "videosFolder": "cypress/videos",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
