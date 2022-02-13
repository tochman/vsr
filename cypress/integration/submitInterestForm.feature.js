/* eslint-disable no-undef */
describe("navigating to the acttivity view", () => {
  before(() => {
    cy.intercept(
      "POST",
      "https://hooks.slack.com/services/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",
      { body: "ok" }
    );
    cy.visit("/agenda");
  });

  before("and filling in both fields", () => {
    cy.get("[data-cy=name-input]").type("Thomas");
    cy.get("[data-cy=email-input]").type("thomas@email.com");
    cy.get("[data-cy=send-button]").click();
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
