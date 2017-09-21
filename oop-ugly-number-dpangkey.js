class UglyNumber {

	constructor(input){
		this.countUglyNumber = 1
		this.input = input
		this.uglyNumber = 0
		this.deret = []
	}

	maxDivides(number, divisible){
		while(number % divisible === 0){
			number = number / divisible
		}
		return number
	}

	isUgly(numberUgly){
		numberUgly = this.maxDivides(numberUgly, 2)
		numberUgly = this.maxDivides(numberUgly, 3)
		numberUgly = this.maxDivides(numberUgly, 5)

		return (numberUgly == 1) ? true : false
	}

	getUglyNo(){
		let i = 1;

		while(this.input > this.countUglyNumber){
			i++;
			if(this.isUgly(i) == 1){
				this.countUglyNumber++
				if(this.deret < 2){
					this.deret.push(1, i)
				}else{
					this.deret.push(i)
				}
			}
		}
		return this.uglyNumber = i

	}

	getUglyArray(){

		return this.deret

	}

}

let ugly = new UglyNumber(150)
console.log(ugly.getUglyNo())
console.log(ugly.getUglyArray())
