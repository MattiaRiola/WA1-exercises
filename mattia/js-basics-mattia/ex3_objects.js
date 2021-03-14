'use strict'

console.log("Objects are mutable and dynamic");
let point1 = {x: 2, y:5};
console.log("point1:");
for(let prop in point1){
    console.log(`\t${prop} = ${point1[prop]}`);
}
let book1 = {
    author : "Enrico",
    title : "Learning JS",
    for : "Students",
    pages : 520,
};
point1["z"] = 4;
book1.pages = 320;
book1.price = 20;
console.log("book1:")
for(let prop in book1){
    console.log(`   ${prop} = ${book1[prop]}`);
}
console.log("point1:");
for(let prop in point1){
    console.log(`\t${prop} = ${point1[prop]}`);
}

console.log("#####################");
console.log("--- Copying objects ---");
let point2 = point1;
point2.z = 9000;
console.log("\"point2 = point1\" copies the reference and changing point2 point1 will change too")
console.log(`point2[z] = ${point2["z"]}\t point1[z] = ${point1["z"]}`);

console.log("To copy an object let myCopy = Obkect.assign(target, source) can be used");
let book2 = {
    num_sells : 500,
    isbn : "ABCD00EFGHI",
}

console.log("book2:");
for(let prop in book2){
    console.log(`   ${prop} = ${book2[prop]}`);
}
let book12_merge = Object.assign(book2,book1);
console.log("book12_merge:");
for(let prop in book12_merge){
    console.log(`   ${prop} = ${book12_merge[prop]}`);
}
let book1_copy = Object.assign({},book1);
console.log("book1_copy:");
for(let prop in book1_copy){
    console.log(`   ${prop} = ${book1_copy[prop]}`);
}

    
console.log("insted of Object.assign I can use the spread ... operator");

let book1_copy2 = {...book1};
console.log("book1_copy2:");
for(let prop in book1_copy2){
    console.log(`   ${prop} = ${book1_copy2[prop]}`);
}
let book3 = {...book12_merge, course : 'WebApp', releaseDate : '24/11/1995' };
console.log("book3:");
for(let prop in book3){
    console.log(`   ${prop} = ${book3[prop]}`);
}


