import _ from 'lodash'

function foo(a,b) {
    this.a = 1;
    this.b = 2;
}

foo.prototype.c = 1
foo.prototype.bar = function(){
    console.log(fooObj);
}

let fooObj = new foo(1,2);
console.log(fooObj)

let fooObj2 = new foo(3,4);
console.log(fooObj2)

_.forIn(fooObj,(o,key)=>{
    console.log(o, key)
})
_.forIn(fooObj2,(o,key)=>{
    console.log(o, key)
})

fooObj.bar();
fooObj2.bar();

//let obj = {a:1,b:2}
//_.forin(obj,(o,key) => {
//    console.log(o,key);
//})
//console.log(fooObj)
//let foo_a = _.bind(foo,obj);