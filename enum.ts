//enum stores constants; duplicate value is not allowed here...

//enum type:
// numeric,
// string,
// heretogenous.

//numeric enum...


enum RequestType {
    Getdata = 1,
    SaveData = 4,
    DeleteData,
}

console.log(RequestType);


//string enum..

enum RequestType2 {
    ReadData = "READ DATA",
    DeleteData = "DELETE DATA",
    SaveData = "SAVE DATA"
}

console.log(RequestType2);


//heterogenous enum...

enum RequestType3 {
    ReadData = "READ DATA",
    DeleteData = "DELETE DATA",
    id = 101
}
console.log(RequestType3);
console.log(RequestType3.id);


//enum using function....


enum Fruits {
    Banana = "Kola",
    Mango = "Aam",
    Jackfruit = "Anarosh"
}

function checkFruit (fol:Fruits) {
    console.log(fol);
    
}
checkFruit(Fruits.Mango);