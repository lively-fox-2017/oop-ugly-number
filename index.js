'use strict'

class UglyNumber {

  constructor() {

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
    let i = 1;
    let countUglyNumber = 1; // ugly number count

    while(input > countUglyNumber) {
      i++;
      if(this.isUgly(i)) {
        countUglyNumber++;
      }
    }
    return i;
  }

  getUglyArray(input) {

    let i = 1;
    let countUglyNumber = 1; // ugly number count
    let uglyNumbersArr = [];

    // Push 1
    uglyNumbersArr.push(1);

    while(input > countUglyNumber) {
      i++;
      if(this.isUgly(i)) {
        countUglyNumber++;
        uglyNumbersArr.push(i);
      }
    }
    return uglyNumbersArr;

  }

}

let generateUgly = new UglyNumber;

console.log(generateUgly.getUglyNo(7));
console.log(generateUgly.getUglyArray(7));
