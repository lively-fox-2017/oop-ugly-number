'use strict'
class UglyNumber{
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

    return (numberUgly === 1) ? true : false;
  }

  getUglyNo(input) {
    let i = 1;
    let countUglyNumber = 1; // ugly number count
    while(input > countUglyNumber) { //7 > 1
      i++;                          //I=1+1
      if(this.isUgly(i) === true) { //ISUGLY = 2 === TRUE
        countUglyNumber++;
      }
    }
     return i;
  }

  getUglyArray(input){
  let i = 1;
  let count = 1
  let hasil = []
    while (input >= count){
      if(this.isUgly(i)===true){
        hasil.push(i)
        count++;
      }
      i++;
    }
    return hasil;
  }
}

//driver code
let newCls = new UglyNumber(); //membuat object
console.log(newCls.getUglyArray(7));
console.log(newCls.getUglyArray(10));
console.log(newCls.getUglyArray(15));
// console.log(newCls.getUglyArray(150));
