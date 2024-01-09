
let a = (x,y,callback) => {
    let sum = x + y;
    callback(sum);
}

let callbackFunc = (sum) => {
    console.log("sum", sum);
}

a(5,7,callbackFunc)
