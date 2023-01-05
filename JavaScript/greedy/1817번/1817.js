/* 
숌은 짐을 챙겨서 겨울캠프에서 집으로 가려고 한다. 근데 숌은 공부를 많이 하러 캠프에 온 것이기 때문에 책을 엄청나게 많이 가지고 왔다. 숌은 이 책을 방에 탑처럼 쌓아 놨다.

숌은 책을 박스에 차곡차곡 넣어서 택배로 미리 보내려고 한다. 책은 탑처럼 차곡차곡 쌓여있기 때문에, 차례대로 박스에 넣을 수밖에 없다.

각각의 책은 무게가 있다. 그리고 박스는 최대 넣을수 있는 무게가 있다. 숌이 필요한 박스의 개수의 최솟값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 책의 개수 N과 박스에 넣을 수 있는 최대 무게 M이 주어진다. N은 0보다 크거나 같고 50보다 작거나 같은 정수이고, M은 1,000보다 작거나 같은 자연수이다. N이 0보다 큰 경우 둘째 줄에 책의 무게가 공백을 사이에 두고 주어진다. 책의 무게는 M보다 작거나 같은 자연수이다.

출력
첫째 줄에 필요한 박스의 개수의 최솟값을 출력한다.

예제 입력 1 
6 10
5 5 5 5 5 5
예제 출력 1 
3
예제 입력 2 
5 100
51 51 51 51 51
예제 출력 2 
5
예제 입력 3 
6 8
1 1 1 7 7 7
예제 출력 3 
4
예제 입력 4 
11 12
12 1 11 2 10 3 4 5 6 6 1
예제 출력 4 
6
예제 입력 5 
0 7
예제 출력 5 
0
*/

let maxWeight = 12;
let bookWeight = [12, 1, 11, 2, 10, 3, 4, 5, 6, 6, 1];

let totalWeight = 0;
let boxCnt = 0;

for(let i=0; i< bookWeight.length; i++){
    totalWeight += bookWeight[i];
    if(totalWeight > maxWeight){
        boxCnt++;
        totalWeight = bookWeight[i];
    }
}

if(totalWeight != 0){
    boxCnt++;
}

console.log(boxCnt);