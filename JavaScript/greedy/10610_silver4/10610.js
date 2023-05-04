/* 
어느 날, 미르코는 우연히 길거리에서 양수 N을 보았다. 미르코는 30이란 수를 존경하기 때문에, 그는 길거리에서 찾은 수에 포함된 숫자들을 섞어 30의 배수가 되는 가장 큰 수를 만들고 싶어한다.

미르코를 도와 그가 만들고 싶어하는 수를 계산하는 프로그램을 작성하라.


1. 30의 배수면 0으로 끝나야하니까 0이 포함되어있어야한다
2. 모든자리수의 합이 3의배수가 나와야한다

*/

const input = '8088';

if (!input.includes('0')) {
  console.log('-1');
} else {
  let sum = 0;
  for (let i of input) {
    sum += i;
  }
  if (sum % 3 !== 0) return console.log('-1');
  const result = input
    .split('')
    .sort((a, b) => b - a)
    .join('');
  console.log(result);
}
