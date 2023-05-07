/* 
임한수와 임문빈은 서로 사랑하는 사이이다.

임한수는 세상에서 팰린드롬인 문자열을 너무 좋아하기 때문에, 둘의 백일을 기념해서 임문빈은 팰린드롬을 선물해주려고 한다.

임문빈은 임한수의 영어 이름으로 팰린드롬을 만들려고 하는데, 임한수의 영어 이름의 알파벳 순서를 적절히 바꿔서 팰린드롬을 만들려고 한다.

임문빈을 도와 임한수의 영어 이름을 팰린드롬으로 바꾸는 프로그램을 작성하시오.
*/

const input = 'ABACABA';

let count = [];

for (let i = 0; i < input.length; i++) {
  const x = input.charCodeAt(i) - 65;
  if (count[x]) {
    count[x]++;
  } else {
    count[x] = 1;
  }
}

const odd = count.filter((v) => v % 2 != 0);
if (odd.length > 1) {
  console.log("I'm Sorry Hansoo");
} else {
  let head = '';
  let body = '';
  let tail = '';

  count.forEach((v, i) => {
    if (v % 2 != 0) {
      body += String.fromCharCode(i + 65);
      v--;
    }
    for (let k = 0; k < v / 2; k++) {
      head += String.fromCharCode(i + 65);
      tail = String.fromCharCode(i + 65) + tail;
    }
  });
  console.log(head + body + tail);
}
