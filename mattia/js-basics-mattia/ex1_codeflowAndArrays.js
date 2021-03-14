'use strict';

console.log("###################");
console.log("--- For stuff ---")
let myArray = [4,5,'ciao'];
console.log("my array is : " + myArray );
console.log("for (... of ARRAY)");
for (let i of myArray){
    console.log(i);
}


console.log("for (... in object)")
let myObject = {x:10,y:20,z:30,name:"point"};
console.log("this is my object : " + myObject);
for(let i in myObject){
    switch (i) {
        case 'x': console.log(i + ' = ' + myObject.x); break;
        case 'y': console.log(i + ' = ' + myObject.y); break;
        case 'z': console.log(i + ' = ' + myObject.z); break;
        case 'name': console.log(i + ' = ' + myObject.name); break;
        default: break;

    }
}

let arrayOfPoints = [{x:10,y:20,name:'point1'},{x:3,y:4,name:'point2'},{x:5,y:6,name:'point3'}];
let count = 0;
for(let obj of arrayOfPoints){
    console.log("object number " + count );
    for(let i in obj){
        switch (i) {
            case 'x': console.log('\t' + i + ' = ' + obj.x); break;
            case 'y': console.log('\t' + i + ' = ' + obj.y); break;
            case 'z': console.log('\t' + i + ' = ' + obj.z); break;
            case 'name': console.log('\t' + i + ' = ' + obj.name); break;
            default: break;
    
        }
    }
    count++;
}

let v0 = [];
let v1 = [1,'hi', 3.1, true];
let v2 = Array.of('uno','due','tre');

let input1 = 'first element';
let input2 = 'last element';
console.log("start: v1 = " + v1);
v1.unshift(input1);
console.log(" after unshift: v1[0] = " + v1[0]);
v1.push(input2);
console.log(" after push: v[last] = " + v1[v1.length-1]);
console.log("v1 = " + v1);
let output1 = v1.pop();
console.log("after a pop: output1 = " + output1);
let output2 = v1.shift();
console.log("after shift: output2 = " + output2);
console.log("v1 = " + v1);

let v3 = v1;
v3[1] = 9000;
console.log("v3 = " + v3  + "\tv1 = " + v1);

console.log("################");
console.log("--- Operation with arrays ---");
console.log("v2 = " + v2);
console.log("v1 = " + v1);
v3 = v2.concat(v1);
console.log("v3 = v2.concat(v1) = " + v3);
console.log("v1 + v2 = " + (v1+v2) + "\t(there is a transformation into string)");
let v4 = v3.slice(3,5);
console.log("v4 = v3.splice(3,5) = " + v4);
console.log("v3 = " + v3);
v3.splice(2,4,'replace1','replace2');
console.log("v3.splice(2,4,'replace1','replace2'); v3 = " + v3);
console.log("v3.join(' ; ') = " + v3.join(' ; '));
console.log("v3.replace(); v3 = " + v3.reverse());
console.log("v3.sort(); v3 = " + v3.sort());
console.log("indexOf('uno') = " + v3.indexOf('uno'));

console.log("#################");
console.log("--- Destructuring assignment---");
let [x,y] = [1,2];
console.log(" let [x,y] = [1,2]\n x = " + x + "\t y = " + y);
console.log("#################");
console.log("--- Spread/Rest operator (...) ---");
let [x2, ...y2] = [1,2,3,4];
console.log("... as rest");
console.log("let [x,...y] = [1,2,3,4];\n x = " + x2 + "\t y = " + y2);
const parts = ['RAM','HDD','CPU','motherboard'];
console.log("const parts = ['RAM','HDD','CPU','motherboard']" + parts);
const wishList = ['mobile_phone', ...parts, 'microwave'];
console.log("const wishList = ['mobile_phone', ...parts, 'microwave']; wishList = " + wishList);

debugger;