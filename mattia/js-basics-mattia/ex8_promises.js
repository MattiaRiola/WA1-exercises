'use strict';
const sqlite = require('sqlite3');


console.log("################");
console.log("--- promises ---\n");

const someValue = "success!";


console.log("first declare a new promise passing a callback function that is launched")
console.log("that function must have 2 other generic callbacks as parameters: resolve and reject")
const myPromise = new Promise((resolve, reject) => {
    //do something asynchronouse which eventually call :
    setTimeout(() => {
        resolve(someValue);
    }, 1000);

    //or
    // reject("failure reason");
})

console.log("using promise.then(myResolve) I execute the myResolve function once the promise")
console.log("executes call the resolve function,  promise.catch(myReject) is for the reject ")
myPromise.then((successMessage) => {
    console.log("Yay! " + successMessage);
});

function wait(duration) {
    return new Promise((resolve, reject) => {
        if (duration < 0)
            reject(new Error('Time travel not possible'))
        else
            setTimeout(resolve, duration);
    });
}

wait(1000).then((result) => {
    //what should i do when the promise is fulfilled:
    console.log("promise is fulfilled!\nresult: ", result);
}).catch((error) => {
    //what should i do when the promise is rejected
    console.log("Error: ", error);
})


console.log("using promise.finally(myFunc) the myFunc will be executed in any case after the reject or resolve ")

wait(1000)
    .then(() => {
        console.log("Success!");

    }).catch((error) => {
        console.log("Error: ", error);
    }).finally(() => {
        console.log("this will be always executed");
    })




console.log("\n#############");
console.log("--- SQLite ---\n");
/*To install instruction see the HowToInstallModules.md */
const db = new sqlite.Database('numbers.sqlite', (err) => {
    if (err)
        throw err;
});
const myQuery1 = 'SELECT * FROM number';
// db.all('SELECT *  FROM number;',(err,rows) => {
//     //WARNING: with debugger it doesn't find any element, but with terminal it works fine
//         if(err)
//             console.log(err);
//         else{
//             for(let row of rows){
//                 console.log(row.num);
//             }
//         }
//     });


/**
 * 
 * @returns returns how many rows there are in number db
 */
function countRows() {
    return new Promise((resolve, reject) => {
        db.all('SELECT COUNT(*) as tot FROM number;', (err, rows) => {
            if (err)
                reject(err);
            else
                resolve(rows[0].tot);
        });
    });
}


/**
 * query that calls resolve with how many numbers are >10 
 * @returns resolve(count of big numbers)
 */
function countBigValues() {
    return new Promise((resolve, reject) => {
        db.all('SELECT COUNT(*) as tot FROM number WHERE num > 10;', (err, rows) => {
            if (err)
                reject(err);
            else
                resolve(rows[0].tot);
        });
    });
}

/**
 * add numbers from 0 to 5 in db
 * @returns resolve(true) if numbers are inserted reject(err) otherwise
 */
function insertNumber() {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < 5; i++)
            db.run(`insert into number values(${i})`,
                (err) => {
                    if (err) reject(err);
                    else resolve(true);
                });
    });
}


function dumbFunc(){
    console.log("hello i'm dumb")
    return 1;
}
async function asyncDumbFunc(){
    console.log("Hello i'm dumb but async!");
    return 10;
} 
/**
 * async function used as wrapper for await functions
 */
async function asyncAwaitExample() {

    console.log("\n##################");
    console.log("--- await asynch ---\n");
    console.log(" _______________________________________________________________________________");
    console.log("| /!\\ WARNING: I can use await only if they are inside in an async function /!\\ |");
    console.log("|_______________________________________________________________________________|");
    console.log("if I call an expression that returns a promise with 'await'");
    console.log("I can stop the execution of the code untill the promise is returned");
    console.log("I get the value returned from the resolve function\nthe reject will produce an exeception\n------");
    let tot = await countRows();
    console.log("starting rows: " + tot);
    console.log("insertNumber() with await...");
    await insertNumber();
    console.log("numbers inserted");
    tot = await countRows();
    console.log("rows after the insert: " + tot);

    wait(1000).then(asyncDumbFunc);
    //I can do the same thing in this way:
    let tot2 = await insertNumber().then(_ => {return countRows();});
    console.log("contatenating insert and count i get\n tot2 = " + tot2);    
    
    // let impossibleDumbRes = await dumbFunc(); //compile err because dumbFunc is not async!!!
    // console.log("this is my asyncDumbRes = " + await asyncDumbFunc());
    
    return true; // this will be converted to a promise
}
// insertNumber();



//in this way it may remove items during the insert so the count gives me a random number 
db.run("DELETE FROM number where num = 0 or num = 1 or num = 2 or num = 3 or num = 4;");

//example of inner for insert and count to work one after the other 
// but it is a DIRTY solution
insertNumber().then((val) => { if (val) console.log("I've just finished to insert numbers"); }).then(() => {
    countRows().then((val) => { console.log("I've " + val + " numbers in my database") })
});


// I can launch n peace of code asynchronously (so the order of execution isn't garanted)
// and I can do a stuff once the both fulfilled n promises
Promise.all([countBigValues(), countRows()]).then(([numBigValues, numTot]) => {
    console.log("num of bigValues: " + numBigValues);
    console.log("numTot : ", numTot);
});

wait(3000)
    .then(() => {
        console.log("OSSERVATION: the numTot changes because of asynch concurrency");

    }).catch((error) => {
        console.log("Error: ", error);
    });

    wait(5000)
    .then(() => {
        asyncAwaitExample();

    }).catch((error) => {
        console.log("Error: ", error);
    });


console.log("byebye");

debugger;

//WARNING: DO NOT close the db outside because it may close the db when it is trying to get the results
//usually js code is based on infinite loop and db may be closed when I'm exiting from this loop
//db.close(); 