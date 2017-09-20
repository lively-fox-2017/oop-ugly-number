class uglyNumber {

  maxDivides(number, divisible) {
    while(number % divisible == 0) {
      number = number / divisible
    }
    return number
  }

  isUgly(numberUgly) {
    numberUgly = this.maxDivides(numberUgly, 2)
    numberUgly = this.maxDivides(numberUgly, 3)
    numberUgly = this.maxDivides(numberUgly, 5)

    return (numberUgly == 1) ? true : false;
  }

  getUglyNo(input) {
    var i = 1
    var countUglyNumber = 1

    while(input > countUglyNumber) {
      i++;
      if(this.isUgly(i) == 1) {
        countUglyNumber++;
      }
    }
    return i;
  }

  getUglyArray(input) {
    var i = 1
    var countUglyNumber = 1
    var arr = []
    arr.push(1)
    while(input > countUglyNumber) {
      i++;
      if(this.isUgly(i) == 1) {
        countUglyNumber++;
        arr.push(i)
      }
    }
    return arr;
  }
}

var angka = new uglyNumber()

console.log(angka.getUglyArray(7));
