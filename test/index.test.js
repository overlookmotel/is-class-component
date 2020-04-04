/* --------------------
 * is-class-component module
 * Tests
 * ------------------*/

// Modules
// eslint-disable-next-line import/no-unresolved, node/no-missing-import
import isClassComponent from 'is-class-component';
import React from 'react';

// Init
import './support/index.js';

// Tests

describe('returns `true` for', () => {
	it.each([
		['React class component', (
			class Test extends React.Component { // eslint-disable-line react/prefer-stateless-function
				render() {
					return null;
				}
			}
		)],
		['React pure class component', (
			class Test extends React.PureComponent {
				render() {
					return null;
				}
			}
		)]
	])('%s', (name, input) => {
		expect(isClassComponent(input)).toBeTrue();
	});
});

describe('returns `false` for', () => {
	it.each([
		['function', function Test() { return null; }],
		['arrow function', () => null],
		['boolean', true],
		['string', 'abc'],
		['number', 123],
		['object', {}],
		['date', new Date()],
		['null', null],
		['undefined', undefined]
	])('%s', (name, input) => {
		expect(isClassComponent(input)).toBeFalse();
	});
});
