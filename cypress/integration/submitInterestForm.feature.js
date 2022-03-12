/* eslint-disable no-undef */
describe("navigating to the acttivity view", () => {
  before(() => {
    cy.intercept(
      "POST",
      "https://hooks.slack.com/services/**",
      { body: "ok", statusCode: 200 }
    ).as("postSlack");
    cy.visit("/agenda");
  });

  before("and filling in both fields", () => {
    cy.get("[data-cy=name-input]").type("Thomas");
    cy.get("[data-cy=email-input]").type("thomas@email.com");
    cy.get("[data-cy=check-1]").click()
    cy.get("[data-cy=check-2]").click()
    cy.get("[data-cy=send-button]").click();
  });

  it("is expected to make a POST request", () => {
    cy.wait("@postSlack")
      .its("request.method")
      .should("eq", 'POST')
  });

  it("is expected to hide form", () => {
    cy.get("[data-cy=form-container]").should("not.exist");
  });

  it("is expected to display welcome message", () => {
    cy.get("[data-cy=thx-message]")
      .should("be.visible")
      .and(
        "contain",
        "Tack Thomas. Vi kommer att skicka mer info till dig snart."
      );
  });
});
