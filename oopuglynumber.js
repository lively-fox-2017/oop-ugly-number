'use strict'

class UglyNumber {
    constructor() {

    }
    maxDivides(num, div) {
        while (num % div === 0) {
            num = num / div;
        }
        return num;
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
        while (input > countUglyNumber) {
            i++;
            if (this.isUgly(i) == 1) {
                countUglyNumber++;
            }
        }
        return i;
    }

    getUglyArray(index) {
        var uglyarr = [];
        for (let i = 1; i <= index; i++) {
            uglyarr.push(this.getUglyNo(i));
        }
        return uglyarr;
    }
}

var tes = new UglyNumber;

// console.log(tes.getUglyArray(10)); //5832
// console.log(tes.getUglyNo(7)); //8
// console.log(tes.getUglyNo(10)); //12
console.log(tes.getUglyNo(15)); //24
