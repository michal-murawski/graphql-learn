const path = require('path');

module.exports = {
	core: {
		builder: 'webpack5',
	},
	stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
	],
	webpackFinal: async (config, { configType }) => {
		config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];

		config.resolve.alias = {
			...config.resolve.alias,
			components: path.resolve(__dirname, '../components'),
		};

		return config;
	},
	typescript: {
		check: true,
		checkOptions: {
			eslint: {
				enabled: true,
				files: './components/**/*.{ts,tsx,jsx}', // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
			},
		},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter(prop) {
				if (!prop.parent) {
					return true;
				}

				if (isIncludedLibrary(prop.parent.fileName)) {
					return true;
				}

				return !/node_modules/.test(prop.parent.fileName);
			},
		},
	},
};

const INCLUDED_LIBRARIES_TYPES = [];

function isIncludedLibrary(parent) {
	return INCLUDED_LIBRARIES_TYPES.some((lib) => parent.toLowerCase().includes(lib.toLowerCase()));
}
