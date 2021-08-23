import './App.css';
import './myui.scss';
import React, { useState } from 'react'
import Home from './Views/Home.js'
import About from './Views/About.js'
import Contact from './Views/Contact.js'
import {Route, Switch, NavLink} from 'react-router-dom'

function App() {
    //라우터 사용법
    //1. exact를 통한 path지정, 이러면 중복로딩 X
    //2. Switch를 통해 매핑 과정 중 동일한 Route를 찾으면 탐색을 중단하고 해당 페이지만 표시
    //이 과정에서 Default옵션은 맨 밑으로 내려가야한다.
    //NavLink -> a 태그 대신 사용
    return (
        <div className="App">
            <div className="myui nav">
                <ul>
                    <li> <NavLink to="/">Home</NavLink></li>
                    <li> <NavLink to="/about">About</NavLink></li>
                    <li> <NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>

            <Switch>
                <Route path="/contact" component={Contact}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/" component={Home}></Route>
            </Switch>

        </div>
    );
}

export default App;
