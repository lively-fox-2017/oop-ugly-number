'use strict';

class isPalindrome{
	constructor(){
		// this.angka = num;
		
	}

isUgly(numberUgly) {
  numberUgly = this.maxDivides(numberUgly, 2);
  numberUgly = this.maxDivides(numberUgly, 3);
  numberUgly = this.maxDivides(numberUgly, 5);

  return (numberUgly == 1) ? true : false;
}

getUglyNo(input){
	input = this.angka;
	let i = 1;
  	let countUglyNumber = 1; 

 
  while(input >= countUglyNumber) {
    
    if(this.isUgly(i) == 1) {
      countUglyNumber++;
    }
    i++;
  }
  return i;
	}

 getUglyArray(array){
 	// array = this.angka;
	let i = 1;
  	let countUglyNumber = 1; 
  	let arr = [];

 
  while(array >= countUglyNumber) {
    
    if(this.isUgly(i) == 1) {
    	arr.push(i)
      countUglyNumber++;
    }
    i++;
  }
  return arr;

 }

maxDivides(number, divisible) {
  while(number % divisible == 0) {
    number = number / divisible;
  }

  return number;
	}
}



let oke = new isPalindrome();

console.log(oke.getUglyArray(150))
console.log(oke.getUglyArray(7))
console.log(oke.getUglyArray(10))
console.log(oke.getUglyArray(15))