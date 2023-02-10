/* 
어떤 수 A가 주어졌을 때, A의 다음수를 구하는 프로그램을 작성하시오.

A의 다음수는 A와 구성이 같으면서, A보다 큰 수 중에서 가장 작은 수 이다.

A와 B의 구성이 같다는 말은 A를 이루고 있는 각 자리수의 등장 횟수가, B를 이루는 각 자리수의 등장 횟수와 같을 때 이다.

예를 들어 123과 321은 구성이 같다. 왜냐하면 두 수 모두 1이 1번, 2가 1번, 3이 1번 나오기 때문이다. 마찬가지로 14232와 12243도 구성이 같다.

하지만, 14232와 14432는 구성이 같지 않다. 

입력
첫째 줄에 테스트 케이스의 개수 T(1<=T<=1,000)가 주어진다. 둘째 줄부터 T개 줄에는 각 테스트 케이스가 주어진다. 테스트 케이스는 한 줄로 이루어져 있으며, 수 A이다. A는 최대 80자리 자연수이다.

출력
각 테스트 케이스에 대해서, 한 줄에 하나씩 A의 다음수를 출력한다. 만약, A의 다음수가 없을 때는 BIGGEST를 출력한다.

예제 입력 1 
3
123
279134399742
987
예제 출력 1 
132
279134423799
BIGGEST
*/

// 생각접근
// 13542 라는 숫자가 있다고 가정해보자
// 14235 가 13542 보다 크면서 제일 작은 수이다.

// 내림차순이 시작되는 지점을 먼저찾는다. 위를예시로 13 / 542 이다
// 시작되는 지점전(3) 과 후(542) 에서 (3)보다 큰수중에 제일 작은 수를 (542)에서 찾은뒤 바꿔준다
// 14 / 532 에서 532 는 오름차순으로 정렬해준다
// 14 / 235 둘을 합치면된다.

let input = '279134399742';

let index = 0;
input = input.split('');


for (let i = input.length - 1; i >= 1; i--) {
  if (input[i - 1] < input[i]) {
    index = i - 1;
    break;
  }
}

if(index == 0){
    console.log('BIGGEST')
    return;
}
let newArr = input.splice(index).map((item) => Number(item));


let temp = newArr[0];
let count = newArr[0];
let pass = true;
let tempIdx = 0;
while (pass) {
  count++;
  countIdx = newArr.findIndex(item=>item==count);
  if(countIdx>0){
    newArr[0] = newArr[countIdx];
    newArr[countIdx] = temp;
    pass = false;
  }
}

let sortArr = newArr.splice(1).sort((a,b)=>a-b);
let newSortArr = newArr.concat(sortArr).map(item=>String(item));

let result = input.concat(newSortArr);

input = result.join('');
console.log(input);


// 뭔가 식이 조금 조잡하지만 생각접근대로 나름 진행하여 풀이하였다.
// 더 간결하게 풀 수 있을거같지만 일단 내방식대로 풀이했다는게 굉장히 잘해냈다고 생각한다