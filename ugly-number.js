class UglyNumber {
	constructor() {}

	maxDivide(number, divisible) {
		while(number % divisible == 0) {
    		number = number / divisible;
  		}

  		return number;
	}

	isUgly(number) {
		number = this.maxDivide(number, 2);
		number = this.maxDivide(number, 3);
		number = this.maxDivide(number, 5);

		return (number === 1) ? true : false;
	}

	getUglyNo(input) {
		let i = 0;
	  	let countUglyNumber = 0;

	  	while(input > countUglyNumber) {
	    	i++;
	    	if(this.isUgly(i)) {
	      		countUglyNumber++;
	    	}
	  	}

	  	return i;
	}

	getUglyArray(input) {
		let i = 0;
	  	let countUglyNumber = 0;
	  	let uglyNumbers = [];

	  	while(input > countUglyNumber) {
	    	i++;
	    	if(this.isUgly(i)) {
	    		uglyNumbers.push(i);
	      		countUglyNumber++;
	    	}
	  	}

	  	return uglyNumbers;
	}
}

let uglyNumber = new UglyNumber();

console.log(uglyNumber.getUglyNo(150)); //5832
console.log(uglyNumber.getUglyNo(7)); //8
console.log(uglyNumber.getUglyNo(10)); //12
console.log(uglyNumber.getUglyNo(15)); //24

console.log(uglyNumber.getUglyArray(150));
console.log(uglyNumber.getUglyArray(7));
console.log(uglyNumber.getUglyArray(10));
console.log(uglyNumber.getUglyArray(15));





/*
-------------ALTERNATIVE VERSION-------------
---one instance one series of ugly numbers---
*/
// class UglyNumber {
// 	constructor(input) {
// 		this.input = input,
// 		this.uglyNumberCount = null,
// 		this.uglyNumbers = []
// 	}

// 	maxDivide(number, divisible) {
// 		while(number % divisible == 0) {
//     		number = number / divisible;
//   		}

//   		return number;
// 	}

// 	isUgly(number) {
// 		number = this.maxDivide(number, 2);
// 		number = this.maxDivide(number, 3);
// 		number = this.maxDivide(number, 5);

// 		return (number === 1) ? true : false;
// 	}

// 	getUglyNo() {
// 		let i = 0;
// 	  	let countUglyNumber = 0;

// 	  	while(this.input > countUglyNumber) {
// 	    	i++;
// 	    	if(this.isUgly(i)) {
// 	    		this.uglyNumbers.push(i);
// 	      		countUglyNumber++;
// 	    	}
// 	  	}

// 	  	this.uglyNumberCount = i;
// 	  	console.log(this.uglyNumberCount);
// 	}

// 	getUglyArray() {
// 		console.log(this.uglyNumbers);
// 	}
// }

// let uglyNumber150 = new UglyNumber(150);
// let uglyNumber7 = new UglyNumber(7);
// let uglyNumber10 = new UglyNumber(10);
// let uglyNumber15 = new UglyNumber(15);

// uglyNumber150.getUglyNo();
// uglyNumber150.getUglyArray();

// uglyNumber7.getUglyNo();
// uglyNumber7.getUglyArray();

// uglyNumber10.getUglyNo();
// uglyNumber10.getUglyArray();

// uglyNumber15.getUglyNo();
// uglyNumber15.getUglyArray();