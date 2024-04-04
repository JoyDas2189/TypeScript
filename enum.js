//enum stores constants; duplicate value is not allowed here...
//enum type:
// numeric,
// string,
// heretogenous.
//numeric enum...
var RequestType;
(function (RequestType) {
    RequestType[RequestType["Getdata"] = 1] = "Getdata";
    RequestType[RequestType["SaveData"] = 4] = "SaveData";
    RequestType[RequestType["DeleteData"] = 5] = "DeleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
//string enum..
var RequestType2;
(function (RequestType2) {
    RequestType2["ReadData"] = "READ DATA";
    RequestType2["DeleteData"] = "DELETE DATA";
    RequestType2["SaveData"] = "SAVE DATA";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2);
//heterogenous enum...
var RequestType3;
(function (RequestType3) {
    RequestType3["ReadData"] = "READ DATA";
    RequestType3["DeleteData"] = "DELETE DATA";
    RequestType3[RequestType3["id"] = 101] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
console.log(RequestType3.id);
//enum using function....
var Fruits;
(function (Fruits) {
    Fruits["Banana"] = "Kola";
    Fruits["Mango"] = "Aam";
    Fruits["Jackfruit"] = "Anarosh";
})(Fruits || (Fruits = {}));
function checkFruit(fol) {
    console.log(fol);
}
checkFruit(Fruits.Mango);
