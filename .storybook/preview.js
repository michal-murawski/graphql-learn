// Global styles can be imported here. Storybook automatically propagates them to all the stories
import '../styles/variables.css';
import '../styles/index.scss';
//
import { Title, Subtitle, Description, Primary, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	docs: {
		page: () => (
			<>
				<Title />
				<Subtitle />
				<Description />
				<Primary />
				<Stories />
				<ArgsTable story={PRIMARY_STORY} />
			</>
		),
	},
};
