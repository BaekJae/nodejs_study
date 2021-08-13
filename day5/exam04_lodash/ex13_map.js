import _ from 'lodash'
//map = sql에서 select와 동일함
console.log('순회');
const input = [1,2,3,4];
let output = _.map(input,(o) => { //forEach와 동일하다.
    console.log(o);
    return o*o;
}); //return 값으로 원래 값이 치환됨

console.log(output);

//select = map
var users = [
    {'user': 'barney', age : 10},
    {'user': 'fred', age : 20}
];
let _users = _.map(users, 'age')

console.log(_users)