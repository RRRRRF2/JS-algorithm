const fs = require("fs");

let a = Number(fs.readFileSync(0).toString().trim());

if(a % 2 ===0){
    a = parseInt(a / 2) ;
}

if(a % 2 === 1){
   a =  parseInt((a+1) / 2);
}

console.log(a);