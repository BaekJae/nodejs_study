import React, {useState} from 'react'

const Home = () => {
    let red_btn = {
        backgroundColor : 'rgb(255,0,0)'
    }

    let [btn_color,btn_colorSet] = useState("blue")

    function changeColor(){
        console.log(btn_color)
        btn_colorSet('pink')
    }

    return(
            <div>
                <h1>Home</h1>
                <button className="myui btn">Normal</button>
                <button className="myui btn" style={red_btn}>Cancel</button>
                <button className="myui btn" style={{
                    backgroundColor: btn_color,
                    padding : "32px 32px"}}
                        onClick={changeColor}>Info</button>
            </div>
    );
}

export default Home;