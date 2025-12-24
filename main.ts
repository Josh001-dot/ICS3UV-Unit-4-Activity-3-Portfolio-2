// Portfolio-2: Largest Decimal
// Author: Joshua Adeyemi
// Date: 2025-12-23

const numbers: number[] = new Array(10);
let i: number;
let largest: number;

// Input
for (i = 0; i < 10; i++) {
  numbers[i] = Number(prompt(`Enter decimal number ${i + 1}:`));
}

// Processing
largest = numbers[0];
for (i = 1; i < 10; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

// Output
console.log(`The largest value in your list is: ${largest}`);
console.log("Here is the list of numbers:");
for (i = 0; i < 10; i++) {
  process.stdout.write(numbers[i].toString());
  if (i < 9) process.stdout.write(", ");
}
console.log();
