//비동기 프로그래밍 예제
//실행순서 step1, step4 -> step3 -> step2
/*console.log('step1')

setTimeout(() => {
    console.log('step2')
},3000)

setTimeout(()=>{
    console.log('step3')
},1000)

console.log('step4')*/

//Callback Hell example
/*console.log('step1')

setTimeout(() =>{
    console.log('step2');
    setTimeout(()=> {
        console.log('step3');
        setTimeout(() => {
            console.log('step4');
        },500)
    },1000)
},3000)*/

//Promise Example, waterfall -> 계속해서 then으로 이어지는 Promise
console.log('step1');
(new Promise((resolve => {
    console.log('step2');
    setTimeout(() => {
        resolve()
    },3000)
}))).then(()=>{
    return new Promise((resolve) => {
        console.log('step3');
        setTimeout(() => {
            resolve()
        }, 1000)
    });
}).then(() => {
    return new Promise((resolve) => {
        console.log('step4');
        setTimeout(() => {
            resolve();
        }, 500)
    });
}).then(_=> {
    console.log('step5')
})