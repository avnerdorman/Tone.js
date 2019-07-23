/**
 *  Tone.js
 *  @author Yotam Mann
 *  @license http://opensource.org/licenses/MIT MIT License
 *  @copyright 2014-2019 Yotam Mann
 */
import { version } from "../version";
// import { getContext } from "./Global";
import "./type/Units";

///////////////////////////////////////////////////////////////////////////
// 	TONE
///////////////////////////////////////////////////////////////////////////

// tslint:disable-next-line: no-empty-interface
export interface BaseToneOptions {}

/**
 *  @class  Tone is the base class of all other classes.
 *  @constructor
 */
export abstract class Tone {

	/**
	 * The version number semver
	 */
	static version: string = version;

	/**
	 * The name of the class
	 */
	protected abstract name: string;

	/**
	 *  disconnect and dispose.
	 */
	abstract dispose(): this;

	/**
	 * Takes a partial options an returns the completed options by filling in the defaults
	 */
	static getDefaults(): BaseToneOptions {
		return {};
	}

	///////////////////////////////////////////////////////////////////////////
	// 	DEBUGGING
	///////////////////////////////////////////////////////////////////////////

	/**
	 * Set this debug flag to log all events that happen in this class.
	 */
	debug: boolean = false;

	/**
	 * Prints the outputs to the console log for debugging purposes.
	 * Prints the contents only if either the object has a property
	 * called `debug` set to true, or a variable called TONE_DEBUG_CLASS
	 * is set to the name of the class.
	 * @param args
	 *  @example
	 * //prints all logs originating from Tone.OscillatorNode
	 * Tone.global.TONE_DEBUG_CLASS = "OscillatorNode"
	 */
	protected log(...args): void {
		// if the object is either set to debug = true
		// or if there is a string on the Tone.global.with the class name
		// @ts-ignore
		if (this.debug || this.toString() === global.TONE_DEBUG_CLASS) {
			args.unshift(this.toString() + ":");
			// tslint:disable-next-line: no-console
			console.log(...args);
		}
	}

	/**
	 *  Assert that the statement is true, otherwise invoke the error.
	 *  @param {Boolean} statement
	 *  @param {String} error The message which is passed into an Error
	 *  @private
	 */
	protected assert(statement: boolean, error: string): void {
		if (!statement) {
			throw new Error(error);
		}
	}

	///////////////////////////////////////////////////////////////////////////
	// 	DEFAULTS
	///////////////////////////////////////////////////////////////////////////

	/**
	 *  If the `given` parameter is undefined, use the `fallback`.
	 *  If both `given` and `fallback` are object literals, it will
	 *  return a deep copy which includes all of the parameters from both
	 *  objects. If a parameter is undefined in given, it will return
	 *  the fallback property.
	 *  <br><br>
	 *  WARNING: if object is self referential, it will go into an an
	 *  infinite recursive loop.
	 *  @memberOf Tone
	 *  @param  {*} given
	 *  @param  {*} fallback
	 *  @return {*}
	 */
	// static defaultArg(given, fallback) {
		// if (isObject(given) && isObject(fallback)) {
		// 	const ret = {};
		// 	// make a deep copy of the given object
		// 	for (const givenProp in given) {
		// 		ret[givenProp] = Tone.defaultArg(fallback[givenProp], given[givenProp]);
		// 	}
		// 	for (const fallbackProp in fallback) {
		// 		ret[fallbackProp] = Tone.defaultArg(given[fallbackProp], fallback[fallbackProp]);
		// 	}
		// 	return ret;
		// } else {
		// 	return isUndef(given) ? fallback : given;
		// }
	// }

	// protected options(argsArray: IArguments, keys: string[]): object {
	// 	let options: any = {};
	// 	const args = Array.from(argsArray);
	// 	if (args[0] instanceof BaseAudioContext) {
	// 		options.context = args.shift();
	// 	}
	// 	if (args.length === 1 && isObject(args[0])) {
	// 		options = Object.assign(options, args[0]);
	// 	} else {
	// 		for (let i = 0; i < keys.length; i++) {
	// 			if (isDefined(args[i])) {
	// 				options[keys[i]] = args[i];
	// 			}
	// 		}
	// 	}
	// 	return deepMerge(this.getDefaults(), options);
	// }

	/**
	 * Convert the class to a string
	 * @example
	 * const osc = new Oscillator()
	 * osc.toString() // "Oscillator"
	 */
	toString(): string {
		return this.name;
	}

	///////////////////////////////////////////////////////////////////////////
	// 	STATIC
	///////////////////////////////////////////////////////////////////////////

	// static get context(): import("./context/Context").Context {
	// 	return getContext();
	// }

	// static now(): Seconds {
	// 	return Tone.context.now();
	// }
}
