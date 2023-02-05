describe("Testing Home page", () => {

  it("Visit the home page", () => {
    cy.visit('/');
  });

  it("count of the cart button changes when adding products to it", () => {
    cy.get("button").contains("Add").click({ force: true });
    cy.get(".nav-link").contains("My Cart (1)").should("be.visible")
});

});