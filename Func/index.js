let obj = {
    name:'Join',
    address: 'japan',
    fuc:function(){
        return (
            console.log("hello word inside function")
        )
    }
};

console.log(`What is your name ?
My name is  ${obj.name}`);
console.log('call function:', obj.fuc());
