class UglyNumber {
  constructor(){}
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
    let countUglyNumber = 1;
    while(input > countUglyNumber) {
      i++;
      if(this.isUgly(i) == 1) {
        countUglyNumber++;
      }
    }
    return i;
  }
  getUglyArray(param){
    let y = 1;
    let countUglyArray = 1;
    let result = [];
    while(param > countUglyArray){
      y++;
      if(this.isUgly(y) == 1){
        countUglyArray++;
        result.push(y);
      }
    }
    return result
  }
}
let newUgly = new UglyNumber();
console.log(newUgly.getUglyNo(10));
console.log(newUgly.getUglyArray(10));
