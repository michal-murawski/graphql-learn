module.exports = {
	presets: [['next/babel']],
	plugins: [
		['import', { libraryName: 'antd', style: true }, 'antd'],
		[
			'import',
			{
				libraryName: 'lodash',
				libraryDirectory: '',
				camel2DashComponentName: false, // default: true
			},
			'lodash',
		],
		'@emotion/babel-plugin',
	],
};
