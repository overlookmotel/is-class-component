/* --------------------
 * is-class-component module
 * Entry point
 * ------------------*/

// Modules
import {isFunction} from 'is-it-type';

// Exports

export default function isClassComponent(input) {
	return isFunction(input) && !!(input.prototype && input.prototype.isReactComponent);
}
