const fsa = require("fs");
const path = require("path");
function read(err, data) {
    if(err)
    console.log("ERROR IS !")
    else 
    console.log(data);
}
const filePath1 = path.join(__dirname, "a.txt");
const contents1 = fsa.readFile(filePath1, "utf-8", read); // asyn
const filepath2 = path.join(__dirname, "b.txt");
const contents2 = fsa.readFile(filepath2, "utf-8", read); // asyn
console.log("DONE");
console.log("hello");

//  //
 
// function timeout()
// {
//     console.log("Click the button!");
// }
// console.log("Hi");
// setTimeout(timeout,1000); // after 1 second letter this execute
// console.log("WELCOME TO LOOP");
// let c=0;
// for(let i=0;i<200000000;i++)
// {
//     c++;   // may take greater than 1 second but this execute first becouse this is synchronous unill this not complete they will not go other

// }
// console.log("loop end", c);
