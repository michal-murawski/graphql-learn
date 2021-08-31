// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * @type {import("next/dist/next-server/server/config").NextConfig}
 **/
const nextConfig = {
	reactStrictMode: true,
	webpack: (config, options) => {
		// Important: return the modified config

		if (options.dev) {
			const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

			config.plugins.push(
				new ForkTsCheckerWebpackPlugin({
					eslint: {
						enable: true,
						files: './**/*.{ts,tsx,jsx}', // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
						options: {},
					},
				})
			);
		}

		return config;
	},
};

module.exports = nextConfig;
