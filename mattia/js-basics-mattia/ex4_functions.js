'use strict';

function printObject(obj,name){
    if(name){
        console.log(name);
        for(let element in obj){
            console.log(`   ${name}[${element}] = ${obj[element]}`);
        }
    }
    else{
        for(let element in obj){
            console.log(` [${element}] = ${obj[element]}`);
    }
            
    }
}
function printArray(arr,name){
    let index = 0;
    if(name){
        console.log(name);
        for(let element of arr){
            console.log(`   ${name}[${index}] = ${element}`);
            index++;
        }
    }
    else{
        for(let element of arr){
            console.log(` [${index}] = ${element}`);
            index++;
        }    
    }
}

function printHello(YourName){
    console.log(`Hello ${YourName}!`);

}
const fn = function complexHello(YourName,YourSurname){
    let str = 'Hello';
    if(YourName)
        str+= (' ' + YourName);
    if(YourSurname)
        str+= (' ' + YourSurname);
    str+='!';
    return str;
}

//complexHello('Mattia'); //I CAN'T CALL IT BY THE NAME

console.log("I can call function and parameters aren't mandaory");
console.log("The missing parameters will have undefined value inside the function");
printHello();
printHello('Mattia');
console.log(fn());
console.log(fn('Mattia'));
console.log(fn('Riola'));
console.log(fn('Mattia','Riola'));

console.log("Array of functions");

const inc_dec_fn = [ function(x){return x+1;}, function(x){return x-1;}];
let a1 = 10;
let [a1_prev, a1_next] = [inc_dec_fn[0](a1),inc_dec_fn[1](a1) ];
console.log(`a1_prev = ${a1_prev}\t a1_next = ${a1_next}`);

console.log("########################");
console.log("--- operators exercise ---");

function evaluateEverything(a,b){
    const operators = {
        '*' : function(x,y){return x*y;}, 
        '+' : function(x,y){return x+y;},
        '/' : function(x,y){return x/y;},
        '-' : function(x,y){return x-y;},
        'pow' : function(x,y){return Math.pow(x,y);},
        'square' : function(x){return x*x;},
    }
    let res = {ok : true};
    console.log(`a=${a} , b=${b}`);
    for(const operator in operators){
        console.log(`\ta${operator}b = ${operators[operator](a,b)}`);
        res[operator] = operators[operator](a,b);
        if(operator == '/' && b == 0)
            res['ok'] = false;
    }
    return res;
}
let [x1,y1] = [10,2];
let results = evaluateEverything(x1,y1);
printObject(results,'results');


console.log("########################");
console.log("--- objects parameters ---");
console.log("parameters are passed always by reference");
let book1 = {name : 'learnign JS', pages:320};
printObject(book1,"book1");
function addPages1(book,n){
    book.pages+=n;
}
function addPages2(book,n){
    book = book['pages']+n; //after the = book is referencing a number
}
function addPages3(book,n){
    let book2 = book;
    book2.pages+=n;
}
function addPages4(book,n){
    book = book;
    book.pages+=n;
}
addPages1(book1,100);
printObject(book1,"book1_1");
addPages2(book1,-300);//it doesn't effect book1
printObject(book1,"book1_2");
addPages3(book1,10);
printObject(book1,"book1_3");
addPages4(book1,+1000);
printObject(book1,"book1_4");

console.log("########################");
console.log("--- arrays parameters ---");
function appendElement1(a,b){
    a = [...a, b ]; // I break the reference of a with '='
}
function appendElement2(a,b){
    a.push(b);
}
let a2 = [1,2,3];
let a3 = [4,5,6];
appendElement1(a2,4);
printArray(a2,"a2");
appendElement2(a3,9000);
printArray(a3,"a3");

const myLambdaFn = (a,b=42) => { a.push(b);}
console.log("this is an example of lambda function");
console.log("if I pass a parameters like this (a,b=42) 42 will be the default value of b");
myLambdaFn(a3);
printArray(a3,"a3");
myLambdaFn(a3,21);
printArray(a3,"a3");

function outerFn(a){
    
    function innerFn(){
        console.log(a);
    }
    innerFn();
    a++;
    return a;
}
let a4 = 10;
let a5 = outerFn(a4);
outerFn(outerFn(a4));
outerFn(a5);

function make_counter(){
    let c = 0; //this variable c is made the first time
    //after the first time the only thing that is execute is increment()
    const increment = () => {c = c+1; return c;}; 
    return increment;
//at the end c will not be destroied because the caller will still point to c thanks to the increment function returned 
}

let counter = make_counter();
console.log(counter()); //I will only execute increment
console.log(counter());
let counter2 = make_counter();
console.log(counter2());
console.log(counter2());
console.log(counter2());


debugger;