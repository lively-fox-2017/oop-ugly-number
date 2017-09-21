'use strict'
class UglyNumber{
  constructor(input){
    this.input=input;
    this.ugly=[];
  }
  maxDivides(num,divisible){
    while(num % divisible == 0){
      num=num/divisible;
    }
    return num;
  }
  isUgly(num){
    num=this.maxDivides(num,2);
    num=this.maxDivides(num,3);
    num=this.maxDivides(num,5); 
    return (num==1)?true:false;
  }
  getUglyArray(num){
    this.ugly.push(num);
  }
  getUglyNo(input){
    let i=0;
    let count=0;
    while(input > count){
      i++;
      if(this.isUgly(i)==1){
        count++;
        this.getUglyArray(i);
      }
    }
    console.log(this.ugly);
    this.ugly=[];
  }
}
//driver code
// console.log(getUglyNo(150)); //5832
var ugly_number=new UglyNumber();
ugly_number.getUglyNo('7'); //[1,2,3,4,5,6,8]
ugly_number.getUglyNo('10'); //[1,2,3,4,5,6,8,9,10,12]
ugly_number.getUglyNo('9'); //[1,2,3,4,5,6,8,9]