import http from 'http'
import {URL} from 'url'

const port = 8125

http.createServer((req,res) => {
    const urlObj = new URL(
        req.url,
        'http://a.com'
    );
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
    res.end(JSON.stringify(result));
}).listen(port);

console.log(`server is listening at ${port} port...`);