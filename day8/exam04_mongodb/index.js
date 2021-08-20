import express from 'express'
import dotenv from 'dotenv'
import {MongoClient} from 'mongodb'
import memoDbRouter from './db_memo.js'
dotenv.config(); //함수 호출 끝에 함수가 오면 세미콜론으로 구분 필요, 그렇지 않으면 메소드 체이닝으로 인식

(async ()=>{
    try{
        //mongodb 접속(서버 접속은 무조건 비동기) - connection때문에 시작이 조금 늦는다
        const db_client = new MongoClient(process.env.MONGODB_URL);

        await db_client.connect();
        //console.log(_result)
        console.log('db connect ok');
        memoDbRouter(db_client)

        //express실행
        const app = express()
        app.use(express.json()) //json미들웨어 등록, 바디 파서
        app.use('/api/v1/memo/',memoDbRouter(db_client));

        if(process.env.NODE_ENV == 'dev'){
            app.get('/hello',(req,res) => {
                res.json({r:'ok'})
            });
        }
        app.listen(process.env.PORT,() => {
            if (process.env.NODE_ENV == 'dev') {
                console.log(`server started at : ${process.env.PORT}`);
            }
        })
    }
    catch(e){
        console.log(e);
    }
})();

