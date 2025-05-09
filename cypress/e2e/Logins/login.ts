import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { Login } from '../../support/PageObjectModel/Login';

const loginpage = new Login();

Given('I open the GetInsights login page', () => {
  cy.visit('https://reactdev.getinsights.org');
});

When('I enter the demo password', () => {
  loginpage.enterDemoPassword();
});

When('I click the menu icon', () => {
  cy.get('.menu-icon > img').click();
});

When('I navigate to the login page', () => {
  cy.get('.other-page-menu > a > .btn').click();
});

When('I enter email {string} and password {string}', (email: string, password: string) => {
  loginpage.enterEmail(email);
  loginpage.enterPassword(password);
});

When('I click the login button', () => {
  loginpage.clickLogin();
  cy.wait(5000);
});

Then('I should see either a success message or an alert', () => {
  cy.get('body').then(($body) => {
    if ($body.find('.alert').length > 0) {
      cy.get('.alert').then(($el) => {
        const errorMessage = $el.text().trim();
        cy.wrap(errorMessage).as('errorMessage');
      });
    } else {
      cy.log(`✅ Login successful`);
    }
  });
});

Then('If login fails for {string}, an email alert is sent', (email: string) => {
  cy.get('@errorMessage').then((errorMessage: any) => {
    if (errorMessage) {
      cy.log(`❌ Login failed for ${email} - ${errorMessage}`);
      cy.task("sendEmail", {
        to: "daniyal.waheed@nullbrainer.io",
        subject: "🚨 Getinsights Login Failed 🚨",
        text: `Login test failed!\n\nTimestamp: ${new Date().toUTCString()}\nUser: ${email}\nError: ${errorMessage}\nPlease investigate.`
      }).then((result: any) => {
        cy.log("📧 Email Sent: " + result);
      });
    }
  });
});
