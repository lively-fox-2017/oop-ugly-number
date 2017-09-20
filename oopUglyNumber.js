'use strict';

class UglyNumber{
  // constructor (){}

  maxDivide(number, divisible) {
    while(number % divisible == 0) {
      number = number / divisible;
    }
    return number;
  }

  isUgly(numberUgly) {
    numberUgly = this.maxDivide(numberUgly, 2);
    numberUgly = this.maxDivide(numberUgly, 3);
    numberUgly = this.maxDivide(numberUgly, 5);

    return (numberUgly == 1) ? true : false;
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

  getUglyArray(input){
    let i=1;
    let countUglyNumber = 1; // ugly number count
    let arr=[1];
    while(input > countUglyNumber) {
      i++;
      if(this.isUgly(i)) {
        countUglyNumber++;
        arr.push(i);
      }
    }
    return arr;
  }
}

let ugly = new UglyNumber ;

console.log(ugly.getUglyNo(7)); //8
console.log(ugly.getUglyArray(7));
