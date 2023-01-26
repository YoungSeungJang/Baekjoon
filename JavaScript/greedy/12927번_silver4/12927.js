/* 
강호는 전구 N개를 가지고 있다. 전구는 1번부터 N번까지 번호가 매겨져 있으며, 일렬로 놓여져 있다. 전구는 켜져있거나 꺼져있다.

강호는 모든 전구를 끄려고 한다. 강호는 전구를 켜고 끌 수 있는 스위치 N개를 가지고 있고, 스위치도 1번부터 N번까지 번호가 매겨져 있다. i번 스위치는 i의 배수 번호를 가지는 전구의 상태를 모두 반전시킨다.

현재 전구의 상태가 주어졌을 때, 모든 전구를 끄기 위해서 스위치를 몇 번 눌러야하는지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 전구의 상태가 1번 전구부터 차례대로 주어진다. Y는 전구가 켜 있는 경우, N은 전구가 꺼져있는 경우이다. 전구의 개수는 1보다 크거나 같고 1,000보다 작거나 같은 자연수이다.

출력
모든 전구를 끄기 위해서 스위치를 몇 번 눌러야 하는지 출력한다. 만약, 모든 전구를 끌 수 없다면 -1을 출력한다.

예제 입력 1 
YYYYYY
예제 출력 1 
1
예제 입력 2 
YNYNYNYNY
예제 출력 2 
2
예제 입력 3 
NNNNNNNNNN
예제 출력 3 
0
예제 입력 4 
YYYNYYYNYYYNYYNYYYYN
예제 출력 4 
4
*/

let input = ['Y', 'N', 'Y', 'N', 'Y', 'N', 'Y', 'N', 'Y'];
let cnt = 0;
for(let i=0;i<input.length;i++){
    if(input[i] == 'Y'){
        cnt++;
    }
}
console.log(cnt);

let change = 0;
while(cnt>0){
    let repeat = 0;
    for(let i=0;i<input.length;i++){
        if(input[i]=='Y'){
            repeat = i+1;
            break;
        }
    }

    for(let i=repeat;i<input.length;i+=repeat){
        if(input[i]=='Y'){
            input[i]='N';
            cnt--;
        }else{
            input[i]='Y';
            cnt++;
        }
    }

    change++;
}

console.log(change);