//실제 제품 출시때에는 nodemon사용 X->자원 절약
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import {logger, authorize, testmw_2, testmw_1} from "./mw.js";
dotenv.config()

const app = express()


//미들웨어 -> 사전에 거쳐가는 곳, 모든 함수가 실행되기 전 한번 실행됨
//미들웨어를 함수로 선언해 사용도 가능
//app.use(logger)
//use는 두개 이상의 함수, 딱 하나만 적용해서 사용하고 싶으면 get내에 임베딩

//두번째 미들웨어 -> 미들웨어도 순서가 있음. 상위 미들웨어 먼저 처리, 인증 담당
//app.use(authorize) // 전역스코프
//app.use([logger,authorize]) //위와 같은 표현 -> 배열로 여러개의 미들웨어를 넘길 수 있다.
//app.use([morgan('tiny'),authorize])//logger를 morgan으로 대체하여 사용 -> 지연 시간까지 확인 가능
app.use([morgan(':method: url :status :res[content-length] - :response-time ms'),authorize]) // 사용자정의형 morgan
//특정 명령 이전에만 반응(특정 url에만 반응하는 미들웨어)
//app.use('/home', testmw_1); //home 스코프
app.use('/home', [testmw_1,morgan(':remote-addr')])//주소 추출
app.use('/about', testmw_2); //about 스코프

app.get('/home',(req,res)=>{
    res.send('<h1>home</h1>');
})
app.get('/home/welcome',(req,res)=>{
    res.send('<h1>Welcome to home</h1>')
})
app.get('/about',(req,res)=>{
    res.send('<h1>about</h1>');
})
//use를 쓰지  않고 직접 미들웨어 등록하기
app.get('/blog',
    (req,res,next) => {//미들웨어 임베딩
        console.log('blog middle ware');
        next();
    },
    (req,res) => { // 콜백
        res.send('<h1>blog</h1>');
    })

app.listen(process.env.PORT,()=>{
    console.log(`server is started at ${process.env.PORT}`)
})