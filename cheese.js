//톰은 마트에서 치즈 1kg 을 사서 집으로 돌아왔습니다.
//그런데 톰이 한눈을 판 사이 제리가 와서 A/B kg 만큼 훔쳐갔습니다.
//제리가 치즈를 훔쳐 간 후 톰이 가지고 있는 치즈의 무게는 얼마인가요?



///
const fs = require('fs'); 
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number); 
console.log(input[1]-input[0], input[1]);



