class AdminLoginPage {
    visit() {
        cy.visit("https://reactdev.getinsights.org/gi-team");  // Admin-specific login page
    }

    enterDemoPassword(){
        cy.get('#inputField1').should("be.visible").type("nullbrainerGI2Dev{Enter}", { force: true });
    }

    enterEmail(email: string) {
        cy.get('input[name="Email"]').should("be.visible").type(email);  // Admin email field
    }

    enterPassword(password: string) {
        cy.get('input[name="Password"]').should("be.visible").type(password);  // Admin password field
    }

    clickLoginButton() {
        cy.get('button[type="submit"]').should("be.visible").click();  // Admin login button
    }

    verifyAdminDashboard() {
        cy.url().should('include', '/gi-team/dashboard');  // Admin-specific dashboard URL
        cy.get('#root > div > div > div > div.col-9 > div.dashboard-section').should('be.visible');
    }
}

export default new AdminLoginPage();
