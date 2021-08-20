import {useState} from 'react'
import './App.css';

function App() {
    //함수 호출시 재귀방지하려면 arrow function 사용 필요
    //let msg='hello react world'
    let [msg,setMsg] = useState('Hello React world')//이래야만 동적으로 반응한다. 초기값 설정, reactitve한 변수
    let [counter, setCounter] = useState(0)

    function increase(){
        setCounter(counter+1);
    }

    function decrease(){
        setCounter(counter-1);
    }

    function Reset(){
        setCounter(0);
    }

    function changeMsg(_newMsg){
        //msg = 'hi'
        setMsg(_newMsg)
        console.log(`change message : ${_newMsg}`)
    }
    return ( //최상위 트리의 꼭대기가 2개 올 수 없음, 최상위 노드는 무조건 1개
        <div className="App">
            <h1>{msg}</h1>
            <button onClick={ () => {changeMsg('hi')}}>change message 1 </button>
            <button onClick={ () => {changeMsg('bye')}}>change message 2 </button>
            <div>
                <h1>The Counter</h1>
                <h3>{counter}</h3>
                <button onClick={() => {increase()}}>+</button>
                <button onClick={() => {decrease()}}>-</button>
                <button onClick={() => {Reset()}}>Reset</button>

            </div>
        </div>
    );
}

export default App;
