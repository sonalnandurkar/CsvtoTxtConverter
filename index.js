const express = require('express');
const app = express();
//const { parse } = require("csv-parse");

const fs = require("fs");
const readline = require("readline");
const stream = fs.createReadStream("data.csv");
const reader = readline.createInterface({ input: stream });
let writeStream = fs.createWriteStream("data.txt");


let data = [];

// writeStream = fs.createWriteStream("JournalDEV.txt");
// writeStream.write("Hi, JournalDEV Users. ");
// writeStream.write("Thank You.");
// writeStream.end();
reader.on("line", row => {
  // This will split a row string into an array
  // And then push into the data array
  data.push(row.split(","));


 
});




reader.on("close", () => {
    writeStream.write(JSON.stringify(data));
    writeStream.end();
  //  Reached the end of file
  console.log(data,"mmmmmm");
});

// fs.createReadStream("data.csv")
//   .pipe(parse({ delimiter: ",", from_line: 1 }))
//   .on("data", function (row) {
//     console.log(row);
//   })
//   .on("error", function (error) {
//     console.log(error.message);
//   })
//   .on("end", function () {
//     console.log("finished");
//   });

// app.listen(3000, () =>
//  console.log('Listening on port 3000')
// );