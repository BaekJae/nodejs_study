import './App.css';
import React, {useState} from 'react';
import MyModal from "./MyModal.js";

function App() {
    let [msg,setMsg] = useState('please login')
    return (
        <div className="App">
            <MyModal title="Login" setMsg={setMsg}/>
            <h5>{msg}</h5>
        </div>
    );
}

export default App;
