//Sync함수 - 콜백함수 불필요 -> 입출력이 끝나야 log실행
//동기식 진행
import fs from 'fs'

fs.writeFileSync('text2.txt',
    'hello',
    {
        encoding:'utf-8'
    }
);

console.log('done')