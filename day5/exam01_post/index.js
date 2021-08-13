import http from 'http'
import {URL} from 'url'
import * as url from "url";

const port = 8125

http.createServer((req,res) => {
    console.log(req.headers);

    console.log(req.headers["my-custom-header"]);

    let _myCustomHeader = req.headers['my-custom-header'];
    console.log(_myCustomHeader);
    const urlObj = new URL(
        req.url,
        'http://a.com'
    );
    console.log(`pathname : ${urlObj.pathname}`);
    console.log(`search : ${urlObj.search}`);
    console.log(`hostname : ${urlObj.hostname}`);
    let result = {
        r: 'ok'
    }
    let header = {
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Max-Age': '1000',
        "Access-Control-Allow-Headers": "*" //CORS 정책 허용  * 는 모두 허용
    }
    res.writeHead(200, header);

    let method = req.method; //GET, POST 인자 구분
    console.log(method);

    if(method === 'GET'){ //Get 처리
        if(urlObj.pathname === '/echo'){ //echo 요청 처리
            let _title = urlObj.searchParams.get('title');
            let _msg = urlObj.searchParams.get('msg');

            result.title = _title;
            result.msg = _msg;
            res.end(JSON.stringify(result));
        }
    }
    else if(method === 'POST') { //Post 처리
        if(urlObj.pathname === '/echo'){ //echo 요청 처리
            let body_data = '';
            req.on('data',(playload) =>{ //데이터가 한번에 오지 않을 수도 있다
                body_data += playload;
            })
            req.on('end', () =>{
                result.data = body_data;
                result.myheader = _myCustomHeader
                res.end(JSON.stringify(result));
            })
        }
    }
    //api가 많을 경우 switch-case문 사용
    /*else if(urlObj.pathname === '/sum'){ //add요청 처리
        let _a = parseInt(urlObj.searchParams.get('a'));
        let _b = parseInt(urlObj.searchParams.get('b'));
        result.cal = _a + _b;
    }
    else if(urlObj.pathname === '/sub'){ //substract
        let _a = parseInt(urlObj.searchParams.get('a'));
        let _b = parseInt(urlObj.searchParams.get('b'));
        result.cal = _a - _b;
    }
    else if(urlObj.pathname === '/avg'){
        let _a = parseInt(urlObj.searchParams.get('a'));
        let _b = parseInt(urlObj.searchParams.get('b'));
        let _c = parseInt(urlObj.searchParams.get('c'));
        let _d = parseInt(urlObj.searchParams.get('d'));
        let _e = parseInt(urlObj.searchParams.get('e'));
        result.cal = (_a+_b+_c+_d+_e) / 5;
    }*/
    //res.end(JSON.stringify(result));
}).listen(port);

console.log(`server is listening at ${port} port...`);