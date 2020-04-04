/* --------------------
 * is-class-component module
 * Entry point
 * ------------------*/

// Modules
import {isFunction} from 'is-it-type';

// Exports

/**
 * Determine if input is a React class component.
 * Input must have already been checked that it's a function before calling this.
 * @param {Function} Component - Function
 * @return {boolean} - true if is a React class component
 */
export default function isClassComponent(input) {
	return isFunction(input) && !!(input.prototype && input.prototype.isReactComponent);
}
