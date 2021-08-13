import _ from 'lodash'
//bind함수 => 특정함수와 object를 바인딩하는 함수
function greet(){
    return 'Hello ' + this.user;
}

let obj_a = {
    user : 'predi',
    age:21
}
let obj_b ={
    user: 'json',
    age:28
}
let greet_a = _.bind(greet,obj_a);
let greet_b = _.bind(greet,obj_b);

console.log(greet_a());
console.log(greet_b());