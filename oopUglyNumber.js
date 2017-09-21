'use strict'

class UglyNumber {
  constructor(){
    this.UglyNumbers = [];
  }

  maxDivide(number, divisible){
    while (number % divisible == 0){
      number = number / divisible;
    }
    return number;
  }

  isUgly(numberUgly){
    numberUgly = this.maxDivide(numberUgly, 2);
    numberUgly = this.maxDivide(numberUgly, 3);
    numberUgly = this.maxDivide(numberUgly, 5);
    return (numberUgly == 1) ? true : false;
  }

  getUglyNo(input){
    let i = 1;
    let countUglyNumber = 1;
    // this.UglyNumbers.push(i);
    while (input > countUglyNumber){
      i++;
      if (this.isUgly(i) == 1){
        countUglyNumber += 1;
        // this.UglyNumbers.push(i);
      }
    }
    return i;
  }

  getUglyArray(num){
    let x = 1;
    let countUglyArray = 1;
    this.UglyNumbers.push(x);
    while (num > countUglyArray){
      x++;
      if (this.isUgly(x) == 1){
        countUglyArray++;
        this.UglyNumbers.push(x);
      }
    }
    return this.UglyNumbers;
  }
}

let answer = new UglyNumber();
console.log(answer.getUglyNo(7));
console.log(answer.getUglyArray(10));
