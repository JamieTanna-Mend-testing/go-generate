/**
 * @typedef {import('renovate/dist/config/types').AllConfig} AllConfig
 */

/** @type {AllConfig} */
let config = {
	onboarding: false,
	requireConfig: 'ignored',

	branchConcurrentLimit: 100,
	prConcurrentLimit: 100,
	// make sure that **??**
	prHourlyLimit: 1000,

	// --------------------------------------------------------------------------------
	// custom

	"packageRules": [
		{
			"matchManagers": ["gomod"],
			"matchDepTypes": ["indirect"],
			"enabled": true
		}
	],

	postUpdateOptions: [
		'goGenerate',
	],

	allowedUnsafeExecution: [
		'goGenerate',
	],
}

module.exports = config;
