const fs = require("fs");

let input = Number(fs.readFileSync(0).toString().trim());

let a = input === 100 ? "pass" : "failure";

console.log(a);