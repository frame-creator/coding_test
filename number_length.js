// 다음과 같이 정의된 수열이 있다.
//D[1] = A
//D[n] = D[n-1]의 각 자리의 숫자를 P번 곱한 수들의 합
//예를 들어 A=57, P=2일 때, 수열 D는 {57, 74(=5^2+7^2=25+49), 65, 61, 37, 58, 89, 145, 42, 20, 4, 16, 37, …}이 된다. 
//뒤에는 앞서 나온 수들(57부터가 아니라 58부터)이 반복된다.
//이와 같은 수열을 계속 구하다 보면 언젠가 이와 같은 반복수열이 된다. 이때, 반복되는 부분을 제외했을 때, 수열에 남게 되는 수들의 개수를 구하는 프로그램을 작성하시오. 
//위의 예에서는 {57, 74, 65, 61}의 네 개의 수가 남게 된다.


///
const [A, P] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(v => +v);
const arr = [A];
while (true) {
    const curNum = String(arr[arr.length-1]);
    const nextNum = curNum.split("").reduce((acc, v) => acc + Number(v)**P, 0);
    if (arr.includes(nextNum)) {
        console.log(arr.indexOf(nextNum));
        break;
    }
    arr.push(nextNum);
}
