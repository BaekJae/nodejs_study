var bar = 10

function foo() {
    var bar = 0 //클로저 변수
    /*bar++ //클로저 내부이므로 +1
    console.log(bar) // 함수 스코프 내부 bar이므로 0*/

    return function() { //return 값이므로 함수가 기억하고있음
        bar ++
        console.log(bar)
    }
}
let _bar_closer=foo()
console.log(bar);
_bar_closer()
_bar_closer()
_bar_closer()
/*console.log(bar) //함수 스코프 바깥 bar이므로 10
foo()//1 -> 함수 종료시 휘발되므로, 0에서 하나만 늘어난 1
foo()//1 -> 함수 종료시 휘발되므로, 0에서 하나만 늘어난 1*/