import _ from 'lodash'

_.forEach([1,2,3,4], o=> console.log(o)); //순회문
console.log('---------------------');
_.forEach({'a':1,'b':2}, (o,key)=>{
   console.log(`key : ${key}, value : ${o}`);
})//Object도 forEach로 순회 가능 -> 해당 방식대로 기입 안하면 키값을 제외하고 탐색
