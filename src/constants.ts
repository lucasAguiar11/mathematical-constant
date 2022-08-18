import fs from 'fs'
import path from 'path'

const readFile = (pFile: string): string => {
  const file = fs.readFileSync(path.resolve(__dirname, pFile));
  return file.toString()
}

export const eulerDigits = (): string => {
  const numbers = readFile('../data/e.txt')
  return numbers
}

export const eulerMascheroniDigits = (): string => {
  const numbers = readFile('../data/γ.txt')
  return numbers
}

export const piDigits = (): string => {
  const numbers = readFile('../data/π.txt')
  return numbers
}

export const pythagorasDigits = (): string => {
  const numbers = readFile('../data/√2.txt')
  return numbers
}

export const theodorusDigits = (): string => {
  const numbers = readFile('../data/√3.txt')
  return numbers
}

export const squareRoot5Digits = (): string => {
  const numbers = readFile('../data/√5.txt')
  return numbers
}

export const goldenRatioDigits = (): string => {
  const numbers = readFile('../data/Φ.txt')
  return numbers
}
