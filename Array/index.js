let family = [

    {name:'Join', age:30},
    {name:'Marry', age:28}
];

if(family.length > 0) {
    family.map((item, index) => {
        if(item.age > 29){
            console.log('age > 29 is name:', item.name)
        }
    })
}
console.log('my family:', family)