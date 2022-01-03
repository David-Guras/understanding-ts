// In TypeScript, you work with types like string or number all the times.
// Important: It is string and number (etc.), NOT String, Number etc.
// The core primitive types in TypeScript are all lowercase!

function add(n1:number, n2:number, showResult: boolean, phrase: string) {
  if (showResult) {
    console.log(phrase + n1 + n2)
  } else {
    return n1+n2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);
