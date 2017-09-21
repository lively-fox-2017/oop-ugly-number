class UglyNumber {
  constructor() {

  }
  maxDivides(number, divisible) {
    while(number % divisible == 0) {
      number /= divisible;
    }
    return number;
  }

  isUgly(numberUgly) { // cek satu2, numberUgly sehingga menghasilkan return 1 , cek nya dengan menjalankan function maxDivides
    numberUgly = this.maxDivides(numberUgly, 2);
    numberUgly = this.maxDivides(numberUgly, 3);
    numberUgly = this.maxDivides(numberUgly, 5);

    return (numberUgly = 1) ? true : false; // jika true lanjut cek ke function getUglyNo, jika false cek ke maxDivides yg selanjutnya
  }

  getUglyNo(input) {
    let i = 1;
    let countUglyNumber = 1; // ugly number count

    while(input > countUglyNumber) { // cek input selama masih lebih dari countUglyNumber, jika ya
      i++; // i naik 1
      if(this.isUgly(i) == 1) { // cek ke function isUgly apakah i nya =1, jika ya countUglyNumber nambah 1
        countUglyNumber++;
      }
    }
    return i;
  }
  getUglyArray(num){
    let arrUglyNumber = []
    for (var i = 0; i < num; i++) {
      arrUglyNumber.push(this.getUglyNo(i))
    }
    return arrUglyNumber
  }
}

// uglyNumber adalah bilangan yang habis dibagi 2, 3, 5
//driver code
let uglyNumber = new UglyNumber
console.log(uglyNumber.getUglyNo(150)); //5832
console.log(uglyNumber.getUglyNo(7)); //8
console.log(uglyNumber.getUglyArray(7));
console.log(uglyNumber.getUglyNo(10)); //12
console.log(uglyNumber.getUglyArray(10));
console.log(uglyNumber.getUglyNo(15)); //24
