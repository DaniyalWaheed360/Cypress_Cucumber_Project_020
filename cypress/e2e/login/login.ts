// // // Step Definitions for Login 
// // import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// // Given("I open the login page", () => {
// //     cy.visit("https://reactdev.getinsights.org/"); // Update with actual URL
// // });

// // When("I enter valid credentials", () => {
// //     cy.get('#inputField1',{timeout:10000}).type("nullbrainerGI2Dev{Enter}", { force: true });
// //     //cy.get('.modal-save > .btn').click();
// //     cy.get('.menu-icon > img').click();
// //     cy.get('.other-page-menu > a > .btn').click();
// //     cy.wait(6000);
// //     // cy.get("#container > ul > li:nth-child(7) > a > button").click();
// //     cy.get("input[name='Email']").type("f89lw@una6i0re.mailosaur.net"); // Update with correct selectors
// //     cy.get("input[name='Password']").type("qQ112233@!");
// // });

// // When("I click the login button", () => {
// //     cy.get("#root > div.login_page > div > div > div.form-holder > form > div > div > button").click();
// // });

// // Then("I should be redirected to the dashboard", () => {
// //     cy.url().should("include", "https://reactdev.getinsights.org");
// // });

// import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Given("I open the login page", () => {
//     cy.visit("https://reactdev.getinsights.org/");
// });

// When("I enter valid credentials", () => {
//     cy.get('#inputField1', { timeout: 10000 }).should("exist").type("nullbrainerGI2Dev{Enter}", { force: true });

//     cy.get('.menu-icon > img').should("be.visible").click();
//     cy.get('.other-page-menu > a > .btn').should("be.visible").click();

//     // Replace cy.wait(6000) with dynamic waiting
//     cy.get("input[name='Email']").should("be.visible").type("f89lw@una6i0re.mailosaur.net"); 
//     cy.get("input[name='Password']").should("be.visible").type("qQ112233@!");
// });

// When("I click the login button", () => {
//     cy.get("button[type='submit']").should("be.visible").click();
// });

// Then("I should be redirected to the dashboard", () => {
//     cy.url().should("include", "https://reactdev.getinsights.org");  // Ensure correct redirect path
// });

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/PageObjectModel/LoginPage";
//import DashboardPage from "../../support/PageObjectModel/Dashboard_Redirection";

Given("I open the login page", () => {
    LoginPage.visit(); // Visit the login page using the method from LoginPage
});

When("I enter {string} and {string}", (email: string, password: string) => {
    LoginPage.navigateToLogin(); // Call the method to perform login steps
    LoginPage.enterEmail(email); // Enter email using the method from LoginPage
    LoginPage.enterPassword(password); // Enter password using the method from LoginPage
});

When("I click the login button", () => {
    LoginPage.clickLoginButton(); // Click the login button using the method from LoginPage
});

Then("I should be redirected to the HomePage", () => {
    LoginPage.verifyDashboard();
});
