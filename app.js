//optional line(line 2)
//import { writeFileSync, appendFileSync } from "fs";
// const fs = require("fs");

// fs.writeFileSync("notes.txt", "this file is created by nodeJS");

// fs.appendFileSync("notes.txt", "\nSecond Line");

const myutils = require("./utils");

const name = myutils.param1;
const addfunc = myutils.addmethod;

console.log(name);
console.log(addfunc(5, 7));
