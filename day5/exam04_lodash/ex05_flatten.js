import _ from 'lodash'

console.log(_.flatten([[1,2],[3,4],[[7]]])); //1단계 평탄화만 가능
console.log(_.flattenDeep([[1,2],[3,4],[[7]]])); //깊은 평탄화