'use strict'

class UglyNumber{
	constructor(){
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
	  
	  this.arr = [1];
	  while(input > countUglyNumber) {
		i++;
		if(this.isUgly(i) == true) {
		  this.arr.push(i);
		  countUglyNumber++;
		}
	  }
	  // Untuk Versi 1
	  return "\n" + i + " :\n------------------";
	  
	  // Untuk Versi 2
	  // return i + " :\n------------------";
	}
	
	// Versi 1
	getUglyArray(){
		return this.arr;
	}
	
	// Versi 2
	// getUglyArray(){
		// return this.arr + "\n";
	// }
}

let uglyNumber = new UglyNumber();
//driver code
console.log(uglyNumber.getUglyNo(150)); //5832
console.log(uglyNumber.getUglyArray());
console.log(uglyNumber.getUglyNo(7)); //8
console.log(uglyNumber.getUglyArray());
console.log(uglyNumber.getUglyNo(10)); //12
console.log(uglyNumber.getUglyArray());
console.log(uglyNumber.getUglyNo(15)); //24
console.log(uglyNumber.getUglyArray());
