class UglyNumber{
  constructor(){

  }

  maxDivides(number, divisible) {
    while(number % divisible == 0) {
      number = number / divisible;
    }
    return number;
  }

  isUgly(numberUgly) {
    numberUgly = ugly.maxDivides(numberUgly, 2);
    numberUgly = ugly.maxDivides(numberUgly, 3);
    numberUgly = ugly.maxDivides(numberUgly, 5);

    return (numberUgly == 1) ? true : false;
  }

  getUglyNo(input) {
    var i = 1;
    let countUglyNumber = 1;
    while(input > countUglyNumber) {
      i++;
      if(ugly.isUgly(i) == 1) {
        countUglyNumber++;
      }
    }
    return i;
  }

  getUglyArray(input) {
    let uglyNo = ugly.getUglyNo(input);
    let uglyNoStr = uglyNo.toString();
    let temp = []
    for (var i = 0; i < uglyNoStr.length; i++) {
      temp.push(uglyNoStr[i]);
    }
    return temp;
  }
}

var ugly = new UglyNumber()
//
console.log(ugly.getUglyNo(150)); //5832
console.log(ugly.getUglyArray(150));

console.log(ugly.getUglyNo(7)); //8
console.log(ugly.getUglyArray(7)); //8

console.log(ugly.getUglyNo(10)); //12
console.log(ugly.getUglyArray(10)); //12

console.log(ugly.getUglyNo(15)); //24
console.log(ugly.getUglyArray(15)); //24
