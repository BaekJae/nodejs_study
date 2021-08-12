/*console.log('step1')

setTimeout(() => {
    console.log('step 2');
}, 1000)

// delay(1000);
// console.log('step2')
console.log('step 3');*/

(new Promise((resolve) =>{ //resolve:완료객체
  console.log('step1')

  setTimeout(() => {
      console.log('step2')
      resolve() //resolve가 실행되면, then이 실행된다.
  },1000)
}))
    .then(()=>{
        console.log('step3')
    })
console.log('step4');
