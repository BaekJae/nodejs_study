process.stdin.resume() //keyboard input
process.stdin.setEncoding('utf-8')
const util = require('util')

process.stdin.on('data', function(text) {
    console.log(`echo : ${text}`); // 변수값 넣기(최신문법)
    if (text === 'exit\r\n'){ //탈출 불가 시에, '\r' 한번 붙여서 확인 (\r= 엔터키(캐리지 리턴))
        process.exit();
    }
    // '1' == 1 true
    // '1' === 1 false
})