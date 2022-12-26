const fs = require('fs');
const [n, input] = fs.readFileSync(__dirname + "/" + "input.txt").toString().trim().split("\n");
const inputArr = input.trim().split(" ").map(item=>item = +item);


// 0, 1, 2라는 조건이 반복되니 나머지를 떠올려야함!!

let strawberry = 0;
let choco = 1;
let banana = 2;

let drink = 0;
let i;

for(i = 0; i < inputArr.length; i++){
    if(inputArr[i]  == drink % 3){
        drink++;
    }
}

console.log(drink);


