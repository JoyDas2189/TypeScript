// let favCity: string[] = ["Bangladesh", "India", "Germany"];
var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], hasDrivingLisense = person[2];
    console.log("Name is ".concat(name, ", age is ").concat(age, " and has driving lisense ").concat(hasDrivingLisense ? "Yes" : "No"));
};
// Example
var person1 = ["Joy", 24, false];
// const person2:PersonInfo = [24, "Joy", false];//throws error.
displayPersonInfo(person1);
var empTuples = ["TypeScript", 101, "Joy"];
var displayTuples = function (tupelsValue) {
    for (var i = 0; i <= empTuples.length; i++) {
        console.log(tupelsValue[i]);
    }
};
displayTuples(empTuples);
