'use strict';
const sqlite = require('sqlite3'); //we are importing the module sqlite3 inside sqlite variable


console.log("#############");
console.log("--- playing with time ---");
const hello = () => {console.log("Hello world");};
playingWithDayJs();
let date1 = new Date(2019,11,21);
console.log(date1.toString());
setTimeout(hello,2000);
console.log("hi!");


console.log("#############");
console.log("--- reading from file ---");
playingWithFiles();

console.log("#############");
console.log("--- SQLite ---");
/*To install instruction see the HowToInstallModules.md */
const db = new sqlite.Database('numbers.sqlite',(err)=>{
    if(err) 
        throw err;
});
const myQuery1 = 'SELECT * FROM number';
db.all('SELECT * FROM number;',(err,rows) => {
    //WARNING: with debugger it doesn't find any element, but with terminal it works fine
        if(err)
            console.log(err);
        else{
            for(let row of rows){
                console.log(row.num);
            }
        }
    });


    

db.close();



function playingWithDayJs(){
//TODO: Playing with dayjs

    // dayjs module is required
    // let now = dayjs();
    // console.log(now);
    // let date1 = dayjs('2021-03-10T16:00');
    // let date2 = dayjs('20210314');
    // let date3 = dayjs(new Date(2019,11,25));
    // console.log(now.toString());
    // console.log(now.format());
    // console.log(now.format('YYYY-MM'));
    
}
function playingWithFiles() {
//  fs.readFile('../README.md',(err,data) =>{
//     if(err !== null){
//             console.log(err);
//             return;
//         }
//     console.log(data);
// })
}

debugger;