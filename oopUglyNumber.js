'use strict'

class UglyNumber {
    constructor() {
       this.arrUgly = [1]; // 1 merupakan ugly number;
    }
    getUglyNo(input) {
        let i = 1;
        let countUglyNumber = 1;
        while (input > countUglyNumber) {
            i++;
            if(this.isUgly(i) === true){
                countUglyNumber++;
                this.arrUgly.push(i);
            }
        }
        return i;
    }
    isUgly(numberUgly) {
        numberUgly = this.maxDivides(numberUgly, 2);
        numberUgly = this.maxDivides(numberUgly, 3);
        numberUgly = this.maxDivides(numberUgly, 5);
      
        return (numberUgly == 1) ? true : false;
    }

    maxDivides(number, divisible) {
        while(number % divisible == 0) {
            number = number / divisible;
          }
          return number;
        }

    getUglyArray() {
        return this.arrUgly;
    }
}


let ugly = new UglyNumber();
console.log(ugly.getUglyNo(7));
console.log(ugly.getUglyArray());

let ugly2 = new UglyNumber();
console.log(ugly2.getUglyNo(10));
console.log(ugly2.getUglyArray());
