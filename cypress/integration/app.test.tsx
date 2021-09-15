export default describe('Navigation', () => {
	it('should navigate to the repositories page', () => {
		// Start from the index page
		cy.visit('http://localhost:8080/');

		// Find a link with an href attribute containing "repositories" and click it
		cy.get('a[href*="repositories"]').click();

		// The new url should include "/repositories"
		cy.url().should('include', '/repositories');

		// The new page should contain a title with "Repositories page"
		cy.findByText('Repositories Page');
	});
});
