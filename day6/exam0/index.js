//cross-env : 환경변수 설정해주는 것
//package-json 내부 scripts: 명령어 별 실행 명령 지정
//npm run dev = dev환경은 run명령어를 통한 실행, npm start = run명령어 불필요
//.env -> setup or configuration, import시 dotenv라 기입 필요, 내부 환경 가져올때 앞에 process.env붙이고 해당 환경변수 입력
//환경변수는 되도록 대문자
//띄어쓰기, 특수문자 모두 입력됨(.env파일). 조심해야한다.
//지속적 추적시에는 git rm (파일 또는 폴더명) --cached를 하고 .gitignore에 추가하면 추적X
import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
const app = express()
const port = process.env.PORT || 3000; //포트 선언 X시 3000, 선언 되어있으면 .env내에 있는 포트로 실행
console.log(process.env.NODE_ENV); //cross-env로 넘어온 내용
console.log(process.env.MONGODB_URL); //.env에서 넘어온 내용
console.log(process.env.MONGODB_PORT); //.env에서 넘어온 내용
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    if(process.env.NODE_ENV == 'dev'){
        console.log(`Example app listening at http://localhost:${port}`)
    }
})