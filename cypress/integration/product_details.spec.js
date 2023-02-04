describe("Product details", () => {

  it("Visit the home page", () => {
    cy.visit('/');
  });
  it("Navigates to product details page by clicking a product", () => {
    cy.get("[alt='Giant Tea']").click();
    cy.contains(".product-detail", "Giant Tea");
})
});