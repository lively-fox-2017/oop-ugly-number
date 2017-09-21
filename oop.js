class UglyNumber {

  constructor(deret,nowNumber,arrUgly) {
    this.deret = 1; // i
    this.nowNumber = 1;  //getUgly
    this.arrUgly = [];
  }//dibuat constructor untuk pemanggilan

  maxDivides(number, divisible){
    while(number % divisible == 0) {
      number = number / divisible;
    }
    return number;
  }

  isUgly(numberUgly){
    numberUgly = this.maxDivides(numberUgly, 2);
    numberUgly = this.maxDivides(numberUgly, 3);
    numberUgly = this.maxDivides(numberUgly, 5);

    return (numberUgly == 1 ? true : false);
  }

  getUglyNo(input){
    this.deret;
    this.nowNumber; // ugly number count

    while(this.nowNumber <= input) {
      this.deret++;
      if(this.isUgly(this.deret) == 1) {
        this.nowNumber++;
      } //used to "
    }
    return this.deret
  }

  getUglyArray(input){
    let i =0;
    while(i < input){
    // this.getUglyNo(i);
    this.arrUgly.push(this.getUglyNo(i))
    i++;
    }
    return this.arrUgly
  //   // return break;
  }
}

var ugly = new UglyNumber();
var uglyarray = new UglyNumber();

// console.log(ugly.getUglyNo(25));

console.log(ugly.getUglyNo(17));
console.log(ugly.isUgly(45));
console.log(ugly.isUgly(57));

console.log(uglyarray.getUglyArray(18));
