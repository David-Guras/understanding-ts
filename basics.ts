// In TypeScript, you work with types like string or number all the times.
// Important: It is string and number (etc.), NOT String, Number etc.
// The core primitive types in TypeScript are all lowercase!

function add1(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

const result = add1(number1, number2, printResult, resultPhrase);
