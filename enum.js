//enum stores constants; duplicate value is not allowed here...
//enum type:
// numeric,
// string,
// heretogenous.
//numeric enum...
var RequestType;
(function (RequestType) {
    RequestType[RequestType["Getdata"] = 0] = "Getdata";
    RequestType[RequestType["SaveData"] = 1] = "SaveData";
    RequestType[RequestType["DeleteData"] = 2] = "DeleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
