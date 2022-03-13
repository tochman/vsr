/* eslint-disable no-undef */
describe("navigating to the acttivity view", () => {
  beforeEach("and filling in both fields", () => {
    cy.intercept("POST", "https://hooks.slack.com/services/**", {
      body: "ok",
      statusCode: 200,
    }).as("postSlack");
    cy.visit("/agenda");
    cy.get("[data-cy=name-input]").type("Thomas");
    cy.get("[data-cy=email-input]").type("thomas@email.com");
    cy.get("[data-cy=check-1]").click();
    cy.get("[data-cy=check-2]").click();
    cy.get("[data-cy=send-button]").click();
  });

  it("is expected to make a POST request", () => {
    cy.wait("@postSlack").its("request.method").should("eq", "POST");
  });

  it("is expected to send a message", () => {
    const expectedMessageAttributes = {
      icon_emoji: ":pencil2:",
      text: "Has submitted an interest form for Läs och Förstå 1700-talet and Vitterhetsbal.\nUse thomas@email.com to get in touch.",
      username: "Thomas",
    };
    cy.wait("@postSlack").then((interception) => {
      expect(interception.request.body).to.eql(expectedMessageAttributes)
    });
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
