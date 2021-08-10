let a = parseInt(process.argv[2]); // 3번째(배열로 따지면 2부터 인수)
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);
let d = parseInt(process.argv[5]);
let e = parseInt(process.argv[6]);

console.log((a + b + c + d + e) / 5); // 5개의 명령행인자 받아 평균구하기