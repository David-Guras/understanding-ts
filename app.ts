function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResults(num: number): void {
  console.log("Result " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

let combinedValues: (a: number, b: number) => number;

combinedValues = add;
// combinedValues = printResult; // !!! Error !!!

combinedValues = add;

console.log(combinedValues(8, 8));

// let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
});
