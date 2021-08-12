//async await function (+Promise) -> then이 없음
//구조만 같다면, 복사와 붙여넣기 후 처리하면 됨
(async function(){
    console.log('step1');
    await (new Promise((resolve) => {
        console.log('step2');

        setTimeout(() => {
            resolve();
        },3000)
    }));
    await (new Promise((resolve) => {
        console.log('step3');

        setTimeout(() => {
            resolve();
        },3000)
    }));
    await (new Promise((resolve) => {
        console.log('step4');

        setTimeout(() => {
            resolve();
        },3000)
    }));
    console.log('step5');
})()