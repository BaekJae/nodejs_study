import express from 'express'

const router = express.Router()

router.use(express.text())

router.get('/list',(req,res) => {
    res.json({r:'ok', data:'this is product list'})
})

router.post('/add', (req,res) => {
    res.json({r:'ok', name:req.body.name})
})

router.post('/update', (req,res)=>{
    //console.log(req.body.name)
    res.json({r:'ok', name:req.body.name})
})

export default router