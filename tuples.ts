// let favCity: string[] = ["Bangladesh", "India", "Germany"];

type PersonInfo = readonly[string, number, boolean];



const displayPersonInfo = (person:PersonInfo) => {
    const [name, age, hasDrivingLisense] = person;
    console.log(`Name is ${name}, age is ${age} and has driving lisense ${hasDrivingLisense ? "Yes" : "No"}`);
    
}

// Example
const person1:PersonInfo = ["Joy", 24, false];

// const person2:PersonInfo = [24, "Joy", false];//throws error.
displayPersonInfo(person1);


let empTuples = ["TypeScript", 101, "Joy"];

const displayTuples = (tupelsValue) => {
    for (let i = 0; i<= empTuples.length; i++) {
        console.log(tupelsValue[i]);
        
    } 

}
displayTuples(empTuples)
