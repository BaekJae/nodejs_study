//file함수 실습
//비동기식 진행
import fs from 'fs'; //신 문법(require 대체)
//const fs = require('fs'); //구형 문법

fs.writeFile(
    'test.txt',
    'hello',
    {
        encoding : 'utf-8' //미지정시 error
    },
    function(err){
        if(err){
            console.log(err);
        }
        else {
            console.log('ok');
        }
    }
); // 직접적으로 쓰는 방법
console.log('done');
