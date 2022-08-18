import fs from 'fs'

export const eulerDigits = (): string => {
  const numbers = fs.readFileSync('./data/e.txt', 'utf8')
  return numbers
}

export const eulerMascheroniDigits = (): string => {
  const numbers = fs.readFileSync('./data/γ.txt', 'utf8')
  return numbers
}

export const piDigits = (): string => {
  const numbers = fs.readFileSync('./data/π.txt', 'utf8')
  return numbers
}

export const pythagorasDigits = (): string => {
  const numbers = fs.readFileSync('./data/√2.txt', 'utf8')
  return numbers
}

export const theodorusDigits = (): string => {
  const numbers = fs.readFileSync('./data/√3.txt', 'utf8')
  return numbers
}

export const squareRoot5Digits = (): string => {
  const numbers = fs.readFileSync('./data/√5.txt', 'utf8')
  return numbers
}

export const goldenRatioDigits = (): string => {
  const numbers = fs.readFileSync('./data/Φ.txt', 'utf8')
  return numbers
}
