function func1(){
    console.log("Hello");
}

function func2(){
    console.log("es6");
}

function foo(){
    return{ //함수를 가리키는 Object를 넘겨줌
        foo1: func1,
        foo2: func2
    }
}
export default foo;