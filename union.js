var value = 20;
var value1 = "Joy";
console.log(value);
console.log(value1);
var displayUnion = function (value) {
    if (typeof value === "number") {
        console.log("The given value is number.");
    }
    else if (typeof value === "string") {
        console.log("The given value is string.");
    }
};
displayUnion(123);
displayUnion("Joy");
