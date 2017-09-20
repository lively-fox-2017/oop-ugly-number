'use strict'
class UglyNumber {
  constructor() {

  }
  maxDivides(number, divisible) {
    while(number % divisible == 0) {
      number = number / divisible;
    }
    return number;
  }
  isUgly(numberUgly) {
    numberUgly = this.maxDivides(numberUgly, 2);
    numberUgly = this.maxDivides(numberUgly, 3);
    numberUgly = this.maxDivides(numberUgly, 5);

    return (numberUgly == 1) ? true : false;
  }
  getUglyNo(input) {
    let i = 1;
    let countUglyNumber = 1; // ugly number count

    while(input > countUglyNumber) {
      i++;
      if(this.isUgly(i) == 1) {
        countUglyNumber++;
      }

    }
    return i;
  }
  getUglyArray(input){
    let i = 1;
    let countUglyNumber = 1; // ugly number count
    let resultArr=[];

    while(input > countUglyNumber) {
      i++;
      if(this.isUgly(i) == 1) {
        countUglyNumber++;
        resultArr.push(i);
      }

    }
    return resultArr;
  }
}

let obj = new UglyNumber();
console.log(obj.getUglyArray(7));
