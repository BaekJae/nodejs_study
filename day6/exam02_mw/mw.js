//미들웨어만 모아놓는 파일
//모든 미들웨어는 next가 없으면 다음 단계를 진행하지 않는다.
const logger = (req,res,next) =>{
    console.log(req.method, req.url, new Date().toISOString());
    next()
}

const authorize = (req,res,next) => {
    if(req.query.apikey == 'qwer'){
        next()
    }
    else {
        res.send('<h1>인증이 필요합니다</h1>')
    }
}

const testmw_1 = (req,res,next) => {
    console.log('check test 1')
    next()
}

const testmw_2 = (req,res,next) => {
    console.log('check test 2')
    next()
}

export {logger, authorize,testmw_1,testmw_2} //각각의 미들웨어별로 export됨