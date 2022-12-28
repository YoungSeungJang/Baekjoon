/* 
서로 다른 N개의 자연수의 합이 S라고 한다. S를 알 때, 자연수 N의 최댓값은 얼마일까?

첫째 줄에 자연수 S(1 ≤ S ≤ 4,294,967,295)가 주어진다.

첫째 줄에 자연수 N의 최댓값을 출력한다.

200

19
*/
let input = 55;
let sum = 0;
let count = 0;
for(let i=1;;i++){
    sum += i;
    count++;
    if(sum>input){
        console.log(i-1);
        break;
    }
}
