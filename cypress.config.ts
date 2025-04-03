import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import esbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    //stepDefinitions: "cypress/e2e/steps/**/*.{js,ts}",
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [esbuildPlugin(config)],
        })
      );
      return config;
    },
    baseUrl: "https://reactdev.getinsights.org/" // Change as needed
  },
});
