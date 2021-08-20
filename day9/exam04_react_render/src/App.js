import './App.css';
import {useState} from 'react'

function App() {
  return ( //조건부 렌더링 - true면 bShowModal, false면 null
      <div className="App">
          <MyModal/>
      </div>
  );
}

//컴포넌트 정의, let의 경우 스코프 확인 필요
function MyModal(){
    let [bShowModal,bShowModal_set] = useState(true)
    return(
        bShowModal ?
            <div className="box">
                <h1>model dlg</h1>
                <button onClick={() => {bShowModal_set(false)}}>[X]</button>
            </div>
            :<button onClick={() => {bShowModal_set(true)}}>[O]</button>
    )
}

export default App;
