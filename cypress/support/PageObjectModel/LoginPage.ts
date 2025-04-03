class LoginPage {
    
    visit() {
        cy.visit("https://reactdev.getinsights.org/");
    }

    navigateToLogin() {
        cy.get('#inputField1', { timeout: 10000 }).should("exist").type("nullbrainerGI2Dev{Enter}", { force: true });

        cy.get('.menu-icon > img').should("be.visible").click();
        cy.get('.other-page-menu > a > .btn').should("be.visible").click();
    
        cy.wait(3000); // Consider using dynamic waiting instead
    }

    enterEmail(email: string) {
        cy.get("input[name='Email']").should("be.visible").type(email);
    }

    enterPassword(password: string) {
        cy.get("input[name='Password']").should("be.visible").type(password);
    }

    clickLoginButton() {
        cy.get("button[type='submit']").should("be.visible").click();
    }

    verifyDashboard() {
        cy.wait(3000);
        cy.url().should("include", "https://reactdev.getinsights.org/");
    }
}

export default new LoginPage();
