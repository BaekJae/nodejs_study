import fs from "fs";

let data = fs.readFileSync('text2.txt', //동기함수
    {
            encoding:'utf-8'
        }
        );
console.log(data);

fs.readFile('text2.txt', //비동기함수
    {
        encoding:'utf-8'
    },
    function(err, data){
        if(err){
            console.log(err);
        }
        else{
            console.log('ok');
            console.log(data);
        }
    }
);