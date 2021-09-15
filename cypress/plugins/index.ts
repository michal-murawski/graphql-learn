// cypress/plugins/index.ts
const injectNextDevServer = require('@cypress/react/plugins/next');

/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
	injectNextDevServer(on, config);
	return config;
};
