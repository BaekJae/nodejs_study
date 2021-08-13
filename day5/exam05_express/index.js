import express from 'express'
const app = express()

const server_port = 8125;
app.use(express.static('www')) //www를 콘텐츠 디렉토리로 사용하겠다. -> 정적 웹 생성

app.get('/hello',(req, res)=>{
    res.send('hi express!!');
})

app.listen(server_port)