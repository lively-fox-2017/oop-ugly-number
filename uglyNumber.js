 class UglyNumber {
   constructor(){

   }
   getUglyNo(input) {
     let i = 1;
     let countUglyNumber = 1; // ugly number count

     while(input > countUglyNumber) {
       i++;
       if(this.isUgly(i) == 1) {
         countUglyNumber++;
       }
     }
     return i;
   }
   getUglyArray(input){
     let i = 1;
     let countUglyNumber = 1;
     let arrayUgly = [];
     while(input > countUglyNumber){
       i++;
       if(this.isUgly(i) == 1){
         arrayUgly.push(i);
         countUglyNumber++;
       }
     }
     return arrayUgly;
   }
   isUgly(numberUgly) {
     numberUgly = this.maxDivide(numberUgly, 2);
     numberUgly = this.maxDivide(numberUgly, 3);
     numberUgly = this.maxDivide(numberUgly, 5);

     return (numberUgly === 1) ? true : false;
   }
   maxDivide(number, divisible) {
     while(number % divisible == 0) {
       number = number / divisible;
     }
     return number;
   }
 }

 var obj = new UglyNumber();
 console.log(obj.getUglyArray(15));
