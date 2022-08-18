import {
  eulerDigits,
  eulerMascheroniDigits,
  goldenRatioDigits,
  piDigits,
  pythagorasDigits,
  squareRoot5Digits,
  theodorusDigits,
} from './constants'

const splitConstant = (constant: string, n: number, withInteger = true): string => {
  const arr = constant.split('.')
  let digits = withInteger ? `${arr[0]}.` : ''
  digits += arr[1].slice(0, n < 0 ? 0 : n)
  return digits
}

/**
 * Napier's constant, e, or Euler's number
 * Returns the first *n* decimals of Euler's number
 *
 * @name EULER_NUMBER
 * @function
 * @param {Number} n The number of decimals.
 * @param {Boolean} withInteger A flag indicating whether to include the entire part (default: true).
 * @return {String} The Euler's number decimals.
 */
export const EULER_NUMBER = (n = 0, withInteger = true): string => {
  return splitConstant(eulerDigits(), n, withInteger)
}

/**
 * Euler–Mascheroni constant
 * Returns the first *n* decimals of Euler–Mascheroni constant
 *
 * @name EULER_MASCHERONI_CONSTANT
 * @function
 * @param {Number} n The number of decimals.
 * @param {Boolean} withInteger A flag indicating whether to include the entire part (default: true).
 * @return {String} The Euler–Mascheroni constant decimals.
 */
export const EULER_MASCHERONI_CONSTANT = (n = 0, withInteger = true): string => {
  return splitConstant(eulerMascheroniDigits(), n, withInteger)
}

/**
 * PI
 * Returns the first *n* decimals of PI number
 *
 * @name PI
 * @function
 * @param {Number} n The number of decimals.
 * @param {Boolean} withInteger A flag indicating whether to include the entire part (default: true).
 * @return {String} The PI decimals.
 */
export const PI = (n = 0, withInteger = true): string => {
  return splitConstant(piDigits(), n, withInteger)
}

/**
 * Pythagoras' constant or square root of 2
 * Returns the first *n* decimals of Pythagoras' constant
 *
 * @name PYTHAGORAS_CONSTANT
 * @function
 * @param {Number} n The number of decimals.
 * @param {Boolean} withInteger A flag indicating whether to include the entire part (default: true).
 * @return {String} The Pythagoras' constant decimals.
 */
export const PYTHAGORAS_CONSTANT = (n = 0, withInteger = true): string => {
  return splitConstant(pythagorasDigits(), n, withInteger)
}

/**
 * Theodorus' constant or square root of 3
 * Returns the first *n* decimals of Theodorus' constant
 *
 * @name THEODORUS_CONSTANT
 * @function
 * @param {Number} n The number of decimals.
 * @param {Boolean} withInteger A flag indicating whether to include the entire part (default: true).
 * @return {String} The Theodorus' constant decimals.
 */
export const THEODORUS_CONSTANT = (n = 0, withInteger = true): string => {
  return splitConstant(theodorusDigits(), n, withInteger)
}

/**
 * Square root of 5
 * Returns the first *n* decimals of Square root of 5
 *
 * @name SQUARE_ROOT_5
 * @function
 * @param {Number} n The number of decimals.
 * @param {Boolean} withInteger A flag indicating whether to include the entire part (default: true).
 * @return {String} The square root of 5 decimals.
 */
export const SQUARE_ROOT_5 = (n = 0, withInteger = true): string => {
  return splitConstant(squareRoot5Digits(), n, withInteger)
}

/**
 * Golden ratio
 * Returns the first *n* decimals of Golden ratio
 *
 * @name GOLDEN_RATIO_CONSTANT
 * @function
 * @param {Number} n The number of decimals.
 * @param {Boolean} withInteger A flag indicating whether to include the entire part (default: true).
 * @return {String} The golden ratio decimals.
 */
export const GOLDEN_RATIO_CONSTANT = (n = 0, withInteger = true): string => {
  return splitConstant(goldenRatioDigits(), n, withInteger)
}
