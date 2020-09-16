// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  let first= userInput[0]*1;
  let second=userInput[0]*2;
  let third=userInput[0]*3;
  console.log(first,second,third);

  

  //end-here
});
