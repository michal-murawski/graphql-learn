import { mount } from '@cypress/react';
import { AppLayout } from './app-layout.component';

const TestChildren = () => (
	<div id="test-div">
		<p>Content of the children</p>
	</div>
);

describe('AppLayout', () => {
	it('should renders children', () => {
		mount(
			<AppLayout>
				<TestChildren />
			</AppLayout>
		);
	});

	cy.get('#test-div').contains('Content of the children');
});
