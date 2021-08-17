import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

console.log(process.env.NODE_ENV)

const app = express() //세팅 -> express는 인스턴스당 하나만 존재하는 객체
//app.use -> 미들웨어
app.use(express.static('./www')) //정적 미들웨어(정적 웹서비스 미들웨어 등록)
app.use('/text', express.static('./text')) //텍스트 파일에 대한 미들웨어 등록

app.get('/api/v1/hello', (req,res)=>{
    //res.send('hello express');
    res.json({r:'ok',info:'hello backend'}) // 아래 코드와 동일한 의미
    //res
        //.set('Content-Type', 'application/json')
        //.status(200)
        //.send(JSON.stringify({r:'ok', info:'hello backend'}))
})

app.get('/api/vi/addUser:/name/age:/age', (req,res) => {
    res.json({
        r:'ok',
        type:'parameter',
        name:req.params.name,
        age:parseInt(req.params.age)
    }
    )
}) //파라미터방식

app.get('/api/v1/addUser', (req,res) => {
    res.json({
        r:'ok',
        type:'parameter',
        name: req.params.name,
        age:parseInt(req.params.age)
    }
    )
}) //쿼리방식

app.get('/help',(req, res) => {
    res
        .set('Content-Type', 'text/html')
        .status(200)
        .send('<h1>Help</h1>')
})
app.all('*',(req,res)=>{
    res //method chaining
        .status(404)
        .send(`page not exist ${req.url}`)
})

app.listen(process.env.PORT,() => {
    console.log(`server start at: ${process.env.PORT}`)
})