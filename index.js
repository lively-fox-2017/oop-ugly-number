class UglyNumber {
	constructor(input){
		this.input=input
	}

	getUglyNo(){
  		let countUglyNumber = 1
  		let i=1;

  		while(this.input > countUglyNumber) {
    		i++;
    		if(this.isUgly(i)) {
      			countUglyNumber++
    		}
  		}

  		return i
  	}

  	isUgly(numberUgly) {
  		numberUgly = this.maxDivide(numberUgly, 2)
  		numberUgly = this.maxDivide(numberUgly, 3)
  		numberUgly = this.maxDivide(numberUgly, 5)

  		return (numberUgly == 1) ? true : false
	}

	maxDivide(number, divisible) {
  		while(number % divisible == 0) {
    	number = number / divisible
 		 }
  		return number
	}

	getUglyArray(){
		let countUglyNumber = 1
  		let i=1
  		let temp=[]
  		let a=0

  		while(this.input > countUglyNumber) {
    		i++;
    		if(this.isUgly(i)) {
      			countUglyNumber++
      			temp[a]=i
    			a++
    		}
  		}

  		return temp
	}
}

let num1 = new UglyNumber(150)
let num2 = new UglyNumber(7)
let num3 = new UglyNumber(10)
let num4 = new UglyNumber(15)

console.log(num1.getUglyNo())
console.log(num1.getUglyArray())

console.log(num2.getUglyNo())
console.log(num2.getUglyArray())

console.log(num3.getUglyNo())
console.log(num3.getUglyArray())

console.log(num4.getUglyNo())
console.log(num4.getUglyArray())
