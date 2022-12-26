/* 
상근이는 2863번에서 표를 너무 열심히 돌린 나머지 5와 6을 헷갈리기 시작했다.

상근이가 숫자 5를 볼 때, 5로 볼 때도 있지만, 6으로 잘못 볼 수도 있고, 6을 볼 때는, 6으로 볼 때도 있지만, 5로 잘못 볼 수도 있다.

두 수 A와 B가 주어졌을 때, 상근이는 이 두 수를 더하려고 한다. 이때, 상근이가 구할 수 있는 두 수의 가능한 합 중, 최솟값과 최댓값을 구해 출력하는 프로그램을 작성하시오.

11 25

1430 4862

16796 58786
*/
let a = 11;
let b = 25;

a = String(a);
b = String(b);

let bigA = +(a.replace(/5/g, '6'));
let bigB = +(b.replace(/5/g, '6'));

let smallA = +(a.replace(/6/g, '5'));
let smallB = +(b.replace(/6/g, '5'));

console.log(bigA+bigB);
console.log(smallA+smallB);

a = 1430;
b = 4862;

a = String(a);
b = String(b);

bigA = +(a.replace(/5/g, '6'));
bigB = +(b.replace(/5/g, '6'));

smallA = +(a.replace(/6/g, '5'));
smallB = +(b.replace(/6/g, '5'));

console.log(bigA+bigB);
console.log(smallA+smallB);

a = 16796;
b = 58786;

a = String(a);
b = String(b);

bigA = +(a.replace(/5/g, '6'));
bigB = +(b.replace(/5/g, '6'));

smallA = +(a.replace(/6/g, '5'));
smallB = +(b.replace(/6/g, '5'));

console.log(bigA+bigB);
console.log(smallA+smallB);

