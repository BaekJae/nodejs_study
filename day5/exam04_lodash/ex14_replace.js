import _ from 'lodash'

const _input = [1,2,3,4];
let _output = _.reduce(_input,(acc,o) => {
    console.log(o);
    //return 0; //0만 return
    //return o; //맨 마지막 문자 return
    acc += o;
    return acc;
},0)

console.log(_output)

//like map method
_output = _.reduce(_input, (acc,o) => {
    //acc.push(o);
    if(o%2){ //홀수만 추출
        acc.push(o);
    }
    return acc;
},[])
console.log(_output);