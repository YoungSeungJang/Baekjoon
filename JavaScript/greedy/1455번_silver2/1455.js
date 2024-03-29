/* 
대한민국 최고의 스트릿 알고리즘 크루를 찾기 위한 리얼리티 서바이벌 <스트릿 알고리즘 파이터>! 전국에서 알고리즘을 잘한다는 
$3N$명의 대학생들이 참여했고, 이들은 3명씩 
$N$개의 크루를 이루어 스트릿 알고리즘 배틀을 벌이게 된다.

하지만 컴퓨터공학도들은 언제나 혼자 코딩을 해왔기 때문에 제작진이 크루를 만들어주어야 한다...

제작진은 혹시나 young한 에너지가 부족한 크루가 생기지 않을까 걱정하고 있다. 그래서 제작진은 아래와 같은 점을 고려해 
$N$개의 크루를 구성하려 한다.

크루원의 연령의 중간값, 즉 세 명 중 두번째로 연령이 높은 크루원의 연령을 크루의 에너지라 부르자.
제작진은 가장 에너지가 높은 크루와 가장 에너지가 낮은 크루의 에너지 차이를 최소화해야 한다.
최소화한 값을 구하라.

입력
첫째 줄에 
$N$이 주어진다. 참가자는 총 
$3N$명이다.

둘째 줄에 
$3N$개의 정수가 공백을 사이에 두고 주어진다. 
$i$번째 정수 
$a_i$는 
$i$번째 참가자의 연령이다.

출력
 
$3N$명의 참가자로 크루 
$N$개를 적절히 구성해, 가장 에너지가 높은 크루와 가장 에너지가 낮은 크루의 에너지 차이를 최소화했을 때의 에너지 차이 값을 출력하라.

제한
 
$1 \le N \le 100\,000$ 
 
$1 \le a_i \le 100\,000\,000$ 
예제 입력 1 
2
21 22 23 24 25 26
예제 출력 1 
1
연령이 22, 23, 26살인 세 명을 묶어서 하나, 21, 24, 25살인 세 명을 묶어서 하나의 크루를 만들면 된다.

각 크루의 에너지(연령의 중간값)는 23과 24가 되며, 문제에서 구하는 값은 24 - 23 = 1이 된다.
*/

let N = 2;

let input = [21, 22, 23, 24, 25, 26];

let gap = input[2*N-1] - input[N];

console.log(gap);