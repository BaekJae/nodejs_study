import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
//미들웨어
const rawBody = (req,res,next)=>{
    if(req.method == 'POST'){
        req.body = ''
        req.setEncoding('utf8')
        req.on('data',(playload)=>{
            //console.log(playload)
            req.body += playload
        })

        req.on('end', ()=>{
            //Body Parsing
            //let _bodyToken = req.body.split('=')
            //req.body = {}
            //req.body[_bodyToken[0]] = _bodyToken[1]
            //console.log(req.body)
            next()
        })
    }
    else {
        next()
    }
}
//app.use('/api/v1', []) //body 데이터를 Parsing하는 미들웨어
app.use(express.static('../www'))

//method -> 한칸 이상 띄우면 body, 아니면 header(.http파일에서)
app.post('/api/v1/hello', rawBody,(req, res) => {
    res.json({r: 'ok', body: req.body})
})
app.post('api/v1/user', (req,res)=>{
    res.json({r: 'ok', name: req.body.name})
})
app.post('/api/v1/addUser', express.urlencoded({extended:false}), (req,res) =>{
    res.json({r: 'ok', name: req.body.name, age:parseInt(req.body.age)})
})

app.post('/api/v2/addUser',express.json(),(req,res)=>{
    res.json({r:'ok', name: req.body.name, age:req.body.age})
})//CSR방식

app.listen(process.env.PORT, () => {
    if(process.env.NODE_ENV == 'dev') {
        console.log(`server started at ${process.env.PORT}`)
    }
})