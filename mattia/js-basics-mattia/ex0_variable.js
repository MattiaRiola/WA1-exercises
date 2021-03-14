"use strict";

console.log("variable must be declared first (otherwise it wont compile)");
console.log("let is used to declare a variable");
console.log("let is used to declare a constant and it (= the reference) cannot be changed (otherwise it wont compile)");
myGlobal = "global string before the declaration"
console.log("myGlobal = " + myGlobal); //undefined is a special value for a var
let a = 'abc';
const b = 6;
var myGlobal = "global string";

console.log("declaring myGlobal");
console.log("myGlobal = " + myGlobal);
console.log(" let a = " + a);
a = 5;
console.log(" a = " + a);

console.log(" const b = " + b);
if( 2 > 1){
    let d = a+1;
    var e = "I'm the global declare inside the if";
}
console.log(" e = " + e);
//console.log(d); //compiling error because i'm out of the scope
let c = b;
c++;
console.log(" c = b\n c++");
console.log(" b = " + b);
console.log(" c = " + c);
//b = 9; //ERROR!!!

a = 10;
c = '10';
if (a == c)
    console.log(" the '==' parse the type automatically");
console.log(" the '===' doesn't parse the type"); //it isn't executed
if( a === c)
    console.log("a and c are not the same type so I wont be printed");

console.log("what is false?");
if(! (0 || -0 || NaN || '' || null || undefined ) )
    console.log("those are considered false value: 0\t -0\t Nan\t ''\t null\t undefined\t");
console.log("what is true?");
let emptyArray = [];
let emptyObject = {};
if( 3 && 'false' && emptyArray && emptyObject)
    console.log("those are considered true: number != 0\t notEmptyString\t emptyArray\t emptyObject\t ");

debugger;
