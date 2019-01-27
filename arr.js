var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!

var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
} 
if (mm < 10) {
  mm = '0' + mm;
} 
var today = dd + '/' + mm + '/' + yyyy;

let arr = [
    {fullName : {surname : 'xxx', firstName : 'yyy', middleName: 'zzz'}}, 
    {fullName : {surname : 'XXX', firstName : 'YYY', middleName: 'ZZZ'}},
    // {fullName : {surname : true, firstName : 10, middleName: today}},
    // {fullName : {surname : 'aaa', firstName : today, middleName: 102}},
    // {fullName : {surname : 'XXX', firstName : 'YYY', middleName: 'ZZZ'}}
]
let boolObj = {fullName : {surname : true, firstName : true, middleName: false}}
let loc = {"fullName.surname" : "Прізвище", "fullName.middleName" : "По-батькові"}

let newArr = []
newObj1 = {};
newObj2 = {};
newObj3 = {};

for (var i = 0; i < arr.length; i++) {
    //KEYS and VALUES of every object that in object FOR arr and boolObj // it is ARRAYS
    let arrObjKeys = Object.keys(arr[i]);
    
    let arrObjObjKeys = Object.keys(Object.values(arr[i])[0]);
    // console.log(arrObjObjKeys[0]);
    let arrObjObjValues = Object.values(Object.values(arr[i])[0]);
    
    let boolObjValues = Object.values(Object.values(boolObj)[0]);
    
    let locObjKeys = Object.keys(loc);
    
    //surname str
    let boolObjStr1 = `${Object.keys(arr[i])}.${arrObjObjKeys[0]}`;
    
    //middleName str
    let boolObjStr3 = `${Object.keys(arr[i])}.${arrObjObjKeys[2]}`;

    // create str for obj value
    let ojbStr1 = `value${i+1}`

    if(boolObjStr1 === locObjKeys[0] && arrObjObjValues[0] !== '') {
        newObj1.name = loc[boolObjStr1];
        newObj3.name = loc[boolObjStr3];
        newObj2.name = arrObjObjKeys[1];
    }
    
    for(let j = 0; j < 3; j++) {
        if(boolObjValues[0] === true) {
            newObj1[ojbStr1] = arr[i][arrObjKeys][arrObjObjKeys[j-2]];
        }

        if(boolObjValues[1] === true) {
            newObj2[ojbStr1] = arr[i][arrObjKeys][arrObjObjKeys[j-1]];
        }

        if(boolObjValues[2] === true) {
            newObj3[ojbStr1] = arr[i][arrObjKeys][arrObjObjKeys[j]];
        }
    }
}
newArr.push(newObj1);
newArr.push(newObj2);
newArr.push(newObj3);

console.log(newArr);

// [{name : "Прізвище", value1 : "xxx", value2 : "XXX"}, {name : "firstName", value1 : "yyy", value2 : "YYY"}]












