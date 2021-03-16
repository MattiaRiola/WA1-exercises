'use strict';
const sqlite = require('sqlite3');

const someValue = "success!";
const myPromise = new Promise((resolve,reject)=>{
    //do something asynchronouse which eventually call :
    setTimeout(()=>{
        resolve(someValue);
    },1000);

    //or
    // reject("failure reason");
})

myPromise.then((successMessage)=>{
    console.log("Yay! " + successMessage);
});

function wait(duration){
    return new Promise((resolve,reject) =>{
        if(duration <0)
            reject(new Error('Time travel not possible'))
        else 
            setTimeout(resolve,duration);
    });
}

wait(1000).then((result)=>{ 
    //what should i do when the promise is fulfilled:
    console.log("promise is fulfilled!\nresult: ",result);
}).catch((error)=>{ 
    //what should i do when the promise is rejected
    console.log("Error: ",error);
})

wait(1000)
    .then(()=>{
        console.log("Success!");

    }).catch((error)=>{
        console.log("Error: ",error);
    }).finally(()=>{
        console.log("this will be always executed");
    })




    console.log("#############");
    console.log("--- SQLite ---");
    /*To install instruction see the HowToInstallModules.md */
    const db = new sqlite.Database('numbers.sqlite',(err)=>{
        if(err) 
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

function countRows(){
    return new Promise((resolve,reject)=>{
        db.all('SELECT COUNT(*) as tot FROM number;',(err,rows) => {
            if(err)
                reject(err);
            else
                resolve(rows[0].tot);
        });
    });
}

function countBigValues(){
    return new Promise((resolve,reject)=>{
        db.all('SELECT COUNT(*) as tot FROM number WHERE num > 10;',(err,rows) => {
            if(err)
                reject(err);
            else
                resolve(rows[0].tot);
        });
    });
}
function insertNumber(){
    return new Promise((resolve,reject)=>{
        for(let i=0;i<5;i++)
            db.run(`insert into number values(${i})`,
                (err)=>{
                    if(err) reject(err);
                    else resolve(true);
                });
        });
}    
// insertNumber();



//in this way it may remove items during the insert so the count gives me a random number 
db.run("DELETE FROM number where num = 0 or num = 1 or num = 2 or num = 3 or num = 4;");        

//example of inner for insert and count to work one after the other 
// but it is a DIRTY solution
insertNumber().then((val)=> {if(val) console.log("I've just finished to insert numbers");}).then( ()=>{       
    countRows().then((val)=>{console.log("I've " + val + " numbers in my database")})
});


// I can launch n peace of code asynchronously (so the order of execution isn't garanted)
// and I can do a stuff once the both fulfilled n promises
Promise.all([countBigValues(),countRows()]).then(([numBigValues,numTot])=>{
    console.log("num of bigValues: " + numBigValues);
    console.log("numTot : ", numTot);
});

wait(3000)
    .then(()=>{
        console.log("OSSERVATION: the numTot changes because of asynch concurrency");

    }).catch((error)=>{
        console.log("Error: ",error);
    });





console.log("byebye");

debugger;

//WARNING: DO NOT close the db outside because it may close the db when it is trying to get the results
//usually js code is based on infinite loop and db may be closed when I'm exiting from this loop
//db.close(); 