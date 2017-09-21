class UglyNumber {
    getUglyNo(input) {
        let i = 1;
        let countUglyNumber = 1; // ugly number count

        while (input > countUglyNumber) {
            i++;
            if (this.isUgly(i) == 1) {
                countUglyNumber++;
            }
        }
        return i;
    }
    isUgly(numberUgly) {
        numberUgly = this.maxDivides(numberUgly, 2);
        numberUgly = this.maxDivides(numberUgly, 3);
        numberUgly = this.maxDivides(numberUgly, 5);
        return (numberUgly == 1) ? true : false;
    }
    maxDivides(number, divisible) {
        while (number % divisible == 0) {
            number = number / divisible;
        }
        return number;
    }

    getUglyArray(baru) {
        let data = [];
        data.push(this.getUglyNo(baru));
        return data;
    }
}
let proses = new UglyNumber();

console.log(proses.getUglyNo(150)); //5832
console.log(proses.getUglyNo(7)); //8
console.log(proses.getUglyNo(10)); //12
console.log(proses.getUglyNo(15)); //24
console.log(proses.getUglyArray(10));