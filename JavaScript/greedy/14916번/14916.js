/* 
춘향이는 편의점 카운터에서 일한다.

손님이 2원짜리와 5원짜리로만 거스름돈을 달라고 한다. 2원짜리 동전과 5원짜리 동전은 무한정 많이 가지고 있다. 동전의 개수가 최소가 되도록 거슬러 주어야 한다. 거스름돈이 n인 경우, 최소 동전의 개수가 몇 개인지 알려주는 프로그램을 작성하시오.

예를 들어, 거스름돈이 15원이면 5원짜리 3개를, 거스름돈이 14원이면 5원짜리 2개와 2원짜리 2개로 총 4개를, 거스름돈이 13원이면 5원짜리 1개와 2원짜리 4개로 총 5개를 주어야 동전의 개수가 최소가 된다.
*/

let input = 13;
let five = Math.floor(input / 5);
let two = 0;
let rest = input - five * 5;

if(input < 5) return console.log(-1);
if(rest % 2 == 0){
    two = rest / 2;
    console.log(five + two);
}else{
    five -= 1;
    rest = input - five * 5;
    two = rest / 2;
    console.log(five + two);
}
// console.log(input);