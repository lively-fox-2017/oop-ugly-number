'use strict'
class UglyNumber {
    constructor() {
        this.arrUgly = [1, ]
    }

    maxDivides(number, divisible) {


        while (number % divisible == 0) {
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
        debugger
        while (input > countUglyNumber) {
            i++;
            this.arrUgly.push(i);
            if (this.isUgly(i) == 1) {
                countUglyNumber++;

            }

        }

        return i

    }
    getUglyArray() {
        return this.arrUgly;

    }

}
let Ugly = new UglyNumber()


console.log(Ugly.getUglyNo(150))
console.log(Ugly.getUglyNo(15))
console.log(Ugly.getUglyArray(15))
console.log(Ugly.getUglyArray(150))
