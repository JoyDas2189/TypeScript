let value : number | string = 20;
let value1 : number | string = "Joy";

console.log(value);
console.log(value1);


const displayUnion = (value:(number | string)) => {
    if(typeof value === "number") {
        console.log("The given value is number.");
    }else if(typeof value === "string") {
        console.log("The given value is string.");
        
    }
}
displayUnion(123);
displayUnion("Joy");