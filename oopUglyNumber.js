"use strict";

class oopUglyNumber {

  constructor (){
    this.countUglyNumber = 1;
    this.newArr = [];
  }

  maxDivides(number, divisible) {
    while(number % divisible === 0) {
      number = number / divisible;
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
    this.countUglyNumber = 1;
    while(input > this.countUglyNumber) {
      i++;
      if(this.isUgly(i) === true) {
        this.countUglyNumber++;
      }
    }
     return i;
  }

  getUglyArray(input){
  let i = 1;
  let count = 1
    while (input >= count){
      if(this.isUgly(i)===true){
        this.newArr.push(i)
        count++;
      }
      i++;
    }
    return this.newArr;
  }
}

//driver code
let tes = new oopUglyNumber();
console.log(tes.getUglyArray(7));
console.log(tes.getUglyArray(15));
