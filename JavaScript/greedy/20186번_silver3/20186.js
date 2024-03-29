/* 
N개의 자연수가 좌우로 배열되어 있다. 여러분은 이 중 K개를 골라야 한다. 고를 때는 K개 모두를 한번에 골라야 한다.

여러분이 고른 수 각각에 대해서 그 수의 점수를 계산할 것이다. 점수는 자신의 수에서 자신의 왼쪽에 있는 수 중 선택된 수의 개수를 뺀 값이다. 이렇게 고른 수 각각에 그 점수를 계산한 후 전체점수는 계산된 점수들의 합이다. 여러분은 전체점수가 최대가 되도록 K개의 수를 골라야 한다.

예를 들어서, N = 5개의 자연수가 순서대로 2 3 1 2 1 로 주어지고, K = 3이라고 하자. 만약 첫 번째 2와 두 개의 1을 골랐다면, 각 수의 점수를 계산해서 나열하면 2 0 −1과 같다. 따라서 전체 점수는 1이다. 만약 첫 번째 2와 3, 그리고 두 번째 2를 고르고, 각 수의 점수를 계산해서 나열하면, 2 2 0과 같다. 따라서 전체점수는 4이다. 이 예에서 전체점수의 최댓값은 4이다.

N개의 자연수 배열과 양의 정수 K가 주어질 때, 전체점수의 최댓값을 출력하는 프로그램을 작성하시오.

입력
첫 번째 줄에 N과 K가 공백 하나를 사이로 두고 주어진다. 두 번째 줄에 N개의 자연수가 공백 하나를 사이에 두고 주어진다.

출력
첫 번째 줄에 주어진 N개의 수 중 K개의 수를 고를 때, 전체점수의 최댓값을 출력한다.

제한
1 ≤ N ≤ 5 000
1 ≤ K ≤ N
주어지는 자연수는 1 이상 100 000 이하
서브태스크
번호	배점	제한
1	4	
N ≤ 3

2	25	
N ≤ 20

3	7	
K = 1

4	9	
K = 2

5	15	
주어지는 N개의 수가 단조증가(감소하지 않는 순서)로 정렬되어 있다. 이는 즉, N개의 수 각각에 대해 그 수의 왼쪽에는 해당 수 이하의 값들만 있고, 오른쪽에는 해당 수 이상의 값들만 있다는 뜻이다.

6	40	
추가 제약 조건 없음

예제 입력 1 
5 3
2 3 1 2 1
예제 출력 1 
4
예제 입력 2 
6 2
4 1 5 2 6 3
예제 출력 2 
10
*/


/* 
생각

개수는 정해지면 빼지는 값은 항상 일정하다
즉 최대값이 되게 하기위해서는 N개 배열에서 K개의 값을 뽑을때 제일 큰 값들만 뽑아주면 된다.
뽑아준 값을 전부 더한뒤 K값-1 하고 1부터 k값까지의합을 K개 합에서 빼주면 된다.
이유는, 처음뽑은 k값은 최초이기 때문에 뺄게 없고 그다음건 최초k의 개수인 1, ...이렇게 그 값이 누적되어서 빼지는 형태이기 때문이다.
*/

let input = [4, 1, 5, 2, 6, 3];
let number = 2;
// number값-1의 총합
let totalNumber = 0;
// 최종값
let result = 0;
// 몇번 돌지 알아야할 카운트
let count = 0;
// 0번째 인덱스가 max라고 가정하고 시작(만약 정말 0번째가 max값이라면 조건문을 돌지 않기 때문에 그대로 사용하면 된다)
let max = Math.min(...input);
// 빈배열
let arr = [];

// input을 전부 돌면서 제일 큰값부터 number 개수만큼 뽑아주자

// 카운트값이 while안을 돌때마다 1씩증가, number와 같을때 종료
while(number!=count){
    for(let i=0; i<input.length;i++){
        if(max<input[i]){
            // 만약 다음 인덱스가 더크면 max값에 넣어준다.
            max = input[i];
        }
    }
    // input배열에서 해당 max값은 제외 시켜주자 다음에 돌릴때 다시 찾아야하니
    const maxIndex = input.findIndex(item=>item==max);
    // splice로 빼주자
    input.splice(maxIndex, 1);
    // 빈배열 arr에 max값을 넣어준다.
    arr.push(max);
    // 다시 max값을 배열의 최소값으로 지정해줘야 다시돌때 최대값을 구해준다.
    max = Math.min(...input);
    // count 증가 (number개수만큼 뽑아줘야 하기 때문)
    count++;
}

// number의 1을 뺀 값까지의 합
for(let i=1;i<number;i++){
    totalNumber += i;
}

// 이제 result 총합에서 totalNumber를 빼주면 된다

result = arr.reduce((total, item)=>total+item) - totalNumber;
console.log(result);

