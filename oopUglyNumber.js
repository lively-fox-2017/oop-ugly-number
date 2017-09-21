class OopUglyNumber {
    constructor() {
        this.arrUglyNum = [];
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

        return (numberUgly == 1) ? true : false; // kondisi
    }

    getUglyNo(input) {
        let i = 1;
        let countUglyNumber = 1; // ugly number count

        while (input > countUglyNumber) {
            i++;
            if (this.isUgly(i) == 1) {
                countUglyNumber++; // counts
            }
        }
        return i;
    }

    getUglyArray() {
        return this.arrUglyNum;
    }
}

let ugly = new OopUglyNumber();
console.log(ugly.getUglyNo(7));
console.log(ugly.getUglyNo(10));
console.log(ugly.getUglyNo(15));
console.log(ugly.getUglyNo(150));