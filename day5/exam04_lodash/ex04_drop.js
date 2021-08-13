//import _ from 'lodash' // for commonjs
import {drop, dropWhile, dropRight} from 'lodash-es' // only for es6 -> 부분적으로 로딩하여 열악한 환경에서의 동작을 돕는다.

console.log('drop');
console.log(drop([1,2,3,4,5,6]));//연쇄적으로 drop가능
//console.log(_.drop(_.drop([1,2,3,4,5,6])));
//console.log(_.drop(_.drop(_.drop([1,2,3,4,5,6]))));

console.log('drop using n');
console.log(drop([1,2,3,4,5,6],2)); // n의 수만큼 drop반복
console.log(drop([1,2,3,4,5,6],3));

console.log('dropRight');
console.log(dropRight([1,2,3,4,5,6]));

console.log('dropWhile');
console.log(dropWhile([1,2,3,4,5,6], (o)=>{
    return o < 3;
}))//dropWhile -> 조건에 일치할때까지 계속 drop해라.

console.log('simple dropWhile');
console.log(dropWhile([1,2,3,4,5,6], o=>o<3)) //중괄호 생략, 위와 동일
