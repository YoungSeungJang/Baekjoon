/* 
준하는 라디오 수집광으로 신제품의 라디오가 나올때마다 흥분을 금치 못한다고 한다.

최근 준하가 구입한 라디오는 매우 하이테크 한데, 그 라디오에는 다음과 같은 버튼이 있다.

첫 번째 버튼은 주파수를 1MHz 증가시킨다.
두 번째 버튼은 주파수를 1MHz 감소시킨다.
나머지 N개의 버튼은 즐겨찾기 기능으로, 미리 지정된 주파수로 이동한다.
준하는 몸이 안좋아 하루에 손가락을 몇 번 움직이지 못하기 때문에 우리의 도움이 필요하다.

현재 주파수 A와 듣고싶은 주파수 B가 주어질 때, 

주파수 A에서 B로 갈 때 눌러야 하는 가장 적은 버튼수를 구해주자.

입력
첫 줄엔 정수 A와 B가 주어진다 (1 ≤ A, B < 1000, A ≠ B).

다음 줄엔 정수 N이 주어진다 (1 ≤ N ≤ 5).

다음 N개의 줄엔 미리 지정되어 있는 주파수가 주어진다 (주파수는 1000 보다 작다).

출력
주파수 A에서 B로 갈 때 눌러야 하는 버튼수의 최솟값을 출력한다.

예제 입력 1 
100 15
1
15
예제 출력 1 
1
예제 입력 2 
88 17
3
18
1
42
예제 출력 2 
2
예제 입력 3 
64 120
1
567
예제 출력 3 
56
*/

let a = 88;
let b = 17;
let MHz = [18, 1, 42];
let arr = [];
cnt = 0;
let gap = a > b ? a - b : b - a;

for(let i=0; i<MHz.length; i++){
    if(MHz[i] <= b){
        arr.push(b-MHz[i]);
    }else{
        arr.push(MHz[i]-b);
    }
}

let minArr = Math.min(...arr);
if(gap<=minArr){
    cnt = gap;
}else{
    cnt++;
    while(minArr!=0){
        minArr--;
        cnt++;
    }
}

console.log(cnt);
