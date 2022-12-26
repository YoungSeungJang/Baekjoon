// 1. 입력값이 한 개일 때(한 줄)
const fs = require('fs');
const input = fs.readFileSync(__dirname + "/" + "input.txt").toString().trim();

let temp = +input;
let result = '';

let a = 300;
let b = 60;
let c = 10;

result += `${parseInt(temp / a)} `;
temp = temp % a;

result += `${parseInt(temp / b)} `;
temp = temp % b;

result += `${parseInt(temp / c)}`;
temp = temp % c;

if(temp>0){
    result = -1;
}
console.log(result);

