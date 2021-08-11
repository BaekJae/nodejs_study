import net from 'net'

const host = 'localhost'
const port = 7035

//소켓생성
const socket = new net.Socket();

//접속시도
socket.connect(port,host,() => {
    //접속 성공하면 처리하는 부분
    socket.write('hello\r\n', 'utf-8', () =>{
        //send ok
        console.log('send message');
    });
});

socket.on('data', (playload)=>{
    console.log('recv from server : ' + playload);
});

socket.on('close',()=>{
    console.log('close');
})