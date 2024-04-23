
// Methods : 
// 1. using <>
// 2. using as keyword

 let totalBill:any = 123;
 let finalBill = <number>totalBill + 200;
 console.log(finalBill);
 
let someValue: any = "Hello World";
let len = (someValue as string).length;
console.log(len);

let flag: any = 12;
if(flag as boolean) {
    console.log("Hello TS!");
    
}