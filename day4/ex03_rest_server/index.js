import http from 'http'
import {URL} from 'url'
import * as url from "url";

const port = 8125

http.createServer((req,res) => {
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

    if(urlObj.pathname === '/echo'){ //echo 요청 처리
        let _title = urlObj.searchParams.get('title');
        let _msg = urlObj.searchParams.get('msg');

        result.title = _title;
        result.msg = _msg;
    }
    else if(urlObj.pathname === '/sum'){ //add요청 처리
        let _a = parseInt(urlObj.searchParams.get('a'));
        let _b = parseInt(urlObj.searchParams.get('b'));
        result.cal = _a + _b;
    }
    else if(urlObj.pathname === '/sub'){ //substract
        let _a = parseInt(urlObj.searchParams.get('a'));
        let _b = parseInt(urlObj.searchParams.get('b'));
        result.cal = _a - _b;
    }
    res.end(JSON.stringify(result));
}).listen(port);

console.log(`server is listening at ${port} port...`);