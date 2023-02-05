/* 
민겸이는 1 빼기를 할 수 있는 능력을 가지고 있다. 1 빼기란, 다음의 두 연산 중 하나를 골라 수행하는 것이다.

가지고 있는 수에서 1을 뺀다.
가지고 있는 수에 있는 1을 하나 지운다. 지우고 난 뒤 좌우의 수들을 순서대로 다시 합쳐 하나의 수로 만든다. 이때 맨 앞의 연속되는 0은 지워진다.
민겸이가 최초로 가지고 있는 정수가 하나 주어질 때, 이 수를 0으로 만들기 위해 최소 몇 번의 1 빼기가 필요한지 구해보자.

입력
민겸이가 가지고 있는 정수 N이 주어진다.

출력
민겸이가 해당 수를 0으로 만들기 위해서 최소 몇 번의 1 빼기가 필요한지 출력한다.

제한
1 ≤ N ≤ 109 
예제 입력 1 
105
예제 출력 1 
6
105 → 5 → 4 → 3 → 2 → 1 → 0의 과정으로 1 빼기를 진행할 경우 6번만으로 수를 0으로 만들 수 있다. 6번보다 적은 1 빼기로 수를 0으로 만드는 방법은 없다.

예제 입력 2 
506
예제 출력 2 
20
예제 입력 3 
1000000000
예제 출력 3 
1
*/

// 문제는 풀만할거같았는데 뭔가 어려웠던 문제

let input = 506;
let count = 0;
let check = true;

let arr = String(input).split('');

while (check) {
  if (String(input).includes('1')) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 1) {
        const index = arr.findIndex((item) => item == 1);
        arr.splice(index, 1);
        input = arr.join('');
        if(input==0){
            check = false;
            count++
            break;
        }
        count++;
      }
    }
  } else {
    input--;
    arr = String(input).split('');
    count++;
  }

  if (arr.length == 0) {
    check = false;
  }
}

console.log(count);


