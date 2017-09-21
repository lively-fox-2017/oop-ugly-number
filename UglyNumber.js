class UglyNumber {
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

  getUglyArray(input) {
    let i = 1;
    let countUglyNumber = 1; // ugly number count
    let arrayUglyNumber = []; // ugly number array
    arrayUglyNumber.push(i);
    while (input > countUglyNumber) {
      i++;
      if (this.isUgly(i) == 1) {
        countUglyNumber++;
        arrayUglyNumber.push(i);
      }
    }
    return arrayUglyNumber;
  }
}

uglyNumber = new UglyNumber();
console.log(uglyNumber.getUglyArray(150)); //5832
console.log(uglyNumber.getUglyArray(7)); //8
console.log(uglyNumber.getUglyArray(10)); //12
console.log(uglyNumber.getUglyArray(15)); //24
