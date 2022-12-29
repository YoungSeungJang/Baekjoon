/* 
민식이는 다음과 같은 폴리오미노 2개를 무한개만큼 가지고 있다. AAAA와 BB

이제 '.'와 'X'로 이루어진 보드판이 주어졌을 때, 민식이는 겹침없이 'X'를 모두 폴리오미노로 덮으려고 한다. 이때, '.'는 폴리오미노로 덮으면 안 된다.

폴리오미노로 모두 덮은 보드판을 출력하는 프로그램을 작성하시오.

XXXXXX
AAAABB

XX.XX
BB.BB

XXXX....XXX.....XX
-1

X
-1

XX.XXXXXXXXXX..XXXXXXXX...XXXXXX
BB.AAAAAAAABB..AAAAAAAA...AAAABB
*/
/* let arr = [];
let str = '';
let str2 = '';
let input = 'XX.XXXXXXXXXX..XXXXXXXX...XXXXXX';
input = input.toUpperCase();
console.log(input);

// str에 x값을 다넣어준뒤 값이 2로나누어지지않으면 -1
for(let i=0; i<input.length; i++){
    if(input[i] == 'X'){
        str += input[i];
    }
}
if(str.length % 2 !== 0) return console.log(-1);

// 1. X를 먼저 .과 분리해주는 작업
for(let i=0; i<input.length; i++){
    if(input[i] == 'X'){
        str2 += input[i];
        console.log(str2);
        if(input[i+1] == '.' || i == input.length-1){
            arr.push(str2);
            str2 = '';
        }
    }
}

// 2. 분리한뒤 4개는 A, 2개는 B
for(let i=0; i<arr.length; i++){
    // if(arr[i].length == 2){
    //     arr[i] = arr[i].replace('XX', 'BB');
    // }
    // if(arr[i].length == 4){
    //     arr[i] = arr[i].replace('XXXX', 'AAAA');
    // }
    // console.log(arr[i].length);
    if(arr[i].length % 4 == 0){
        arr[i] = arr[i].replace(/X/g, 'A')
    }
    if(arr[i].length % 4 != 0){
        // arr[i] = arr[i].replace(/X/g, 'A');
        // arr[i] = arr[i][arr[i].length-1].replace('A', 'B');
        // arr[i] = arr[i][arr[i].length-2].replace('A', 'B');
    }
}


console.log(arr);
// console.log(str); */

let input = 'XX.XXXXXXXXXX..XXXXXXXX...XXXXXX';
input = input.toUpperCase();
let result = input.replace(/XXXX/g, 'AAAA').replace(/XX/g, 'BB');

if(result.includes('X')){
    console.log(-1);
} else {
    console.log(result);
}