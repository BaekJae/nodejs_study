import http from 'http'
import {URL} from 'url'
import fs from 'fs'
import * as url from "url";

const port = 8325
//http:localhost:8325/index.html
http.createServer((req,res) =>{
    console.log(req.url);
    console.log(req.method); //GET,POST 요청 식별
    const urlObj = new URL(
        req.url,
        "http://exam.com" //url이 상대경로면 앞에 붙이는 주소
    )
    console.log(urlObj.pathname);
    let header = {
        'Content-Type' : 'text/html'
    }
    let _path = './www' + urlObj.pathname; //SERVER쪽 LOCAL PATH
    console.log(_path);
    try {
        let data = fs.readFileSync(_path);
        res.writeHeader(200, header);
        res.end(data);
    }
    catch (e){
        header['Content-Type'] = 'text/plain'
        res.writeHeader(200, header);
        res.end('file not found');
    }
}).listen(port);

console.log(`server is listening at ${port}....`);