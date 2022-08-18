
# mathematical-constant


![Downloads](https://img.shields.io/npm/dt/mathematical-constant.svg)
[![PayPal][badge_paypal_donate]][paypal-donations]


> 
    Computed constants decimals
    
    e => Napier's constant, or Euler's number
    γ => Euler–Mascheroni constant
    π => pi
    √2 => Pythagoras' constant
    √3 => Theodorus' constant
    √5 => Square root of 5
    Φ  => Golden ratio 

## :cloud: Installation

```sh
# Using npm
npm install --save mathematical-constant

# Using yarn
yarn add mathematical-constant
```

## :clipboard: Example

```js
const {
  EULER_MASCHERONI_CONSTANT,
  GOLDEN_RATIO_CONSTANT,
  EULER_NUMBER,
  PI,
  PYTHAGORAS_CONSTANT,
  SQUARE_ROOT_5,
  THEODORUS_CONSTANT,
} = require("mathematical-constant");

// => "0.577215664901532", "577215664901532"
console.log(EULER_MASCHERONI_CONSTANT(15), EULER_MASCHERONI_CONSTANT(15, false) );

// => "1.618033988749894", "618033988749894"
console.log(GOLDEN_RATIO_CONSTANT(15), GOLDEN_RATIO_CONSTANT(15, false));

// => "2.718281828459045", "718281828459045"
console.log(EULER_NUMBER(15), EULER_NUMBER(15, false));

// => "3.141592653589793", "141592653589793"
console.log(PI(15), PI(15, false));

// => "1.414213562373095", "414213562373095"
console.log(PYTHAGORAS_CONSTANT(15), PYTHAGORAS_CONSTANT(15, false));

// => "2.236067977499789", "236067977499789"
console.log(SQUARE_ROOT_5(15), SQUARE_ROOT_5(15, false));

// => "1.732050807568877", "732050807568877"
console.log(THEODORUS_CONSTANT(15), THEODORUS_CONSTANT(15, false));

```

[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg
[paypal-donations]: https://www.paypal.com/donate/?hosted_button_id=DYNBVV9MWPA88
