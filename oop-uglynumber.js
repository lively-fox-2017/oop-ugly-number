class uglyNumber {
	constructor () {
	}

	maxDivides(number , divisible){
		while(number % divisible === 0){
			number = number / divisible
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
	    i = i + 1;
	    if(this.isUgly(i) == 1) {
	      countUglyNumber++;
	    }
	  }
 		return i;
	}

	getUglyArray(deret){
		//return this.getUglyNo(input)
		let i = 1;
		let stopper = 1;
		let tampung = [];

		while (stopper <= deret){
				if (this.isUgly(i) === true){
				tampung.push(i)
				stopper++
				//i++
			}
			i++
		}
			// for (let i = 1; i <= deret; i++){
			// 		tampung.push(this.getUglyNo(i))
			// }
			return tampung;
	}

}

let coba = new uglyNumber();
console.log(coba.getUglyNo(7));

console.log(coba.getUglyArray(7)) // 8
// console.log(coba.getUglyArray(150)) // 5832
console.log(coba.getUglyArray(10)) // 12
console.log(coba.getUglyArray(15)) // 24
