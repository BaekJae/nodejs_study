import _ from 'lodash'

var objects = [{'a':1},{'b':2}];

let _objects = objects;
console.log(_objects === objects); //true -> 단순 copy

let objects2 = _.clone(objects);
console.log(objects === objects2); //false -> 배열 내부가 동일한 공간을 참조함
console.log(objects[0] === objects2[0]); //배열의 인자는 같음

console.log('----deep clone----')
let objects3 = _.cloneDeep(objects)

console.log(objects === objects3)
console.log(objects[0] === objects3[0]) //Deepclone -> 배열 내부의 인자까지 다르다. -> 배열 내부의 공간이 다르다.
