function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResults(num: number): void {
  console.log("Result " + num);
}

let combinedValues: (a: number, b:number) => number;

combinedValues = add;
// combinedValues = printResult; // !!! Error !!!

combinedValues = add;

console.log(combinedValues(8, 8));


// let someValue: undefined;
