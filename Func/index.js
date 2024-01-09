
let a = (x,y,callback) => {
    let sum = x + y;
    callback(sum);
}

let callbackFunc = (sum) => {
    console.log("sum", sum);
}

a(5,7,callbackFunc)


// filter, find

let arr = [1,2,3,4,5,6,7,8];
let arrObj = [
    {name: "Join", age:30},
    {name: "Marry", age:30},
    {name: "Ross", age:40},
];

let arrFilter1 = arrObj.find((item) =>  { return item && item.age === 30; })
    
let arrFilter = arrObj.filter((item) =>  { return item && item.age === 30; })

console.log(arrFilter1);
console.log(arrFilter);