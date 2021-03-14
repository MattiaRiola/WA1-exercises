'use strict';

console.log("/!\\ strings are immutable /!\\");

let str1 = 'Hello World! I\'m Mattia '; 
console.log("str1 = " + str1);
console.log("World starts in the position : " + str1.indexOf('World'));
console.log("let myWord = str1.split(' ') =  " + str1.split(' '));
//#TODO: play with match, matchHello and myregex
let myRegex1 = 'H*';
let myRegex2 = 'M*';
console.log("str1.match('myRegex1' (= 'H*') ) = " + str1.match('myRegex1'));
console.log("str1.match('myRegex2' (= 'M*') ) = " + str1.match('myRegex2'));