/* --------------------
 * is-class-component module
 * Babel source config
 * ------------------*/

'use strict';

// Exports

module.exports = {
	plugins: [
		// All `for (... of ...) ...` loops are over arrays
		['@babel/plugin-transform-for-of', {assumeArray: true}],

		// Replace `__DEV__` with `process.env.NODE_ENV !== 'production'`
		// and remove error messages from `invariant()` in production mode
		'dev-expression'
	]
};
