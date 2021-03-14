/**
 * log console function that prints in the console
 * @param {*} quote string I want print 
 */
function logQuote(quote){
    console.log(quote);
}

/**
 * 
 * @param {*} quoe  
 * @param {*} callback  is a function that can be called inside the function 
 */
function createQuote(quote,callback){ 
    const myQuote = `Like I always say, '${quote}'`;
    callback(myQuote);
}

createQuote("WebApp I Rocks!",logQuote);

let a = [3,5,88,42,9000,15];
console.log(a);
a.sort();
console.log(a); // the default sorting method is comparing the string
a.sort((a,b) => (a-b)); // i've to pass a method to compare the numbers
console.log(a);

console.log("!!!! IMPORTANT CALLBACKS USES !!!!");
console.log("############")
console.log("--- FILTER ---")
let a2 = a.filter((x) => x>10);
console.log(a2); 
console.log("############")
console.log("--- FOR EACH ---")
let a3 = [1,2,3,4,5,10,20];
a3.forEach((index,arr) => {
    if(index > 0){
        arr[index]+=arr[index-1];
    }
}); //a3 doesn't change (see map to change the array)

a3.forEach((value,index) => {console.log(value+" at position " + index)});
console.log(a3);
console.log("############")
console.log("--- EVERY AND SOME ---")
console.log("every checks if the function returns true for each element of the array")
console.log(a3);
console.log("a3.every > 0 ?" + a3.every(x => x>0)); 
console.log("a3.every > 10 ?" + a3.every(x => x>10)); 
console.log("some checks if the function returns true for some element of the array")
console.log("a3.some > 10 ?"+a3.some(x=>x>10));
console.log("a3.some > 100 ?"+a3.some(x=>x>100));
console.log("############")
console.log("--- MAP and REDUCE---")
const a4 = [1,2,3,4,5,6,7];
const a5 = a4.map(x => x*x);
console.log(a5);
let sum = 0;
sum = a5.reduce((acc,element) => acc+element , 0);
console.log(sum);
debugger;