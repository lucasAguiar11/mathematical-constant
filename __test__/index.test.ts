import {
  EULER_MASCHERONI_CONSTANT,
  EULER_NUMBER,
  GOLDEN_RATIO_CONSTANT,
  PI,
  PYTHAGORAS_CONSTANT,
  SQUARE_ROOT_5,
  THEODORUS_CONSTANT,
} from '../src/index'

describe('testing index file', () => {
  test("Napier's constant, e, or Euler's number", () => {
    expect(EULER_NUMBER(15)).toBe('2.718281828459045')
    expect(EULER_NUMBER(15, false)).toBe('718281828459045')
  })

  test('Euler–Mascheroni constant', () => {
    expect(EULER_MASCHERONI_CONSTANT(15)).toBe('0.577215664901532')
    expect(EULER_MASCHERONI_CONSTANT(15, false)).toBe('577215664901532')
  })

  test('PI', () => {
    expect(PI(15)).toBe('3.141592653589793')
    expect(PI(15, false)).toBe('141592653589793')
  })

  test("Pythagoras' constant or square root of 2", () => {
    expect(PYTHAGORAS_CONSTANT(15)).toBe('1.414213562373095')
    expect(PYTHAGORAS_CONSTANT(15, false)).toBe('414213562373095')
  })

  test("Theodorus' constant or square root of 3", () => {
    expect(THEODORUS_CONSTANT(15)).toBe('1.732050807568877')
    expect(THEODORUS_CONSTANT(15, false)).toBe('732050807568877')
  })

  test('Square root of 5', () => {
    expect(SQUARE_ROOT_5(15)).toBe('2.236067977499789')
    expect(SQUARE_ROOT_5(15, false)).toBe('236067977499789')
  })

  test('Golden ratio', () => {
    expect(GOLDEN_RATIO_CONSTANT(15)).toBe('1.618033988749894')
    expect(GOLDEN_RATIO_CONSTANT(15, false)).toBe('618033988749894')
  })
})
