class UglyNumber {
  constructor() {
    this.arr = [];
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

    this.arr.push(1); // karena ugly number dimulai dari angka 1

    while(input > countUglyNumber) {
      i++;
      if(this.isUgly(i) == 1) {
        countUglyNumber++;
        this.arr.push(i);
      }
    }
    return i;
  }

  getUglyArray() {
    return this.arr;
  }
}

let test = new UglyNumber();

console.log(test.getUglyNo(7));
console.log(test.getUglyArray(7));
