export default describe('Repositories List', () => {
	it('should display initial result from GitHub graphql API', () => {
		cy.visit('http://localhost:8080/repositories');

		cy.findByText('Repositories Page');

		// The new page should contain a title with "Repositories page"
	});
});
