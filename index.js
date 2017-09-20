'use strict'

class UglyNumber {

  constructor() {
    this.uglyNumbers = [];
  }

  maxDivides(number, divisible) {
    while(number % divisible == 0) {
      number /= divisible;
    }
    return number;
  }

  isUgly(numberUgly) {
    numberUgly = this.maxDivides(numberUgly, 2);
    numberUgly = this.maxDivides(numberUgly, 3);
    numberUgly = this.maxDivides(numberUgly, 5);

    return (numberUgly === 1) ? true : false;
  }

  getUglyNo(input) {

    this.uglyNumbers = [];

    let i = 1;
    let countUglyNumber = 1; // ugly number count

    // Push 1
    this.uglyNumbers.push(1);

    while(input > countUglyNumber) {
      i++;
      if(this.isUgly(i)) {
        countUglyNumber++;
        this.uglyNumbers.push(i);
      }
    }
    return i;
  }

  getUglyArray() {

    return this.uglyNumbers;

  }

}

let generateUgly = new UglyNumber;

console.log(generateUgly.getUglyNo(7));
console.log(generateUgly.getUglyArray());
