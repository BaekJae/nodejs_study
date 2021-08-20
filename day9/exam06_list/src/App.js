import './App.css';
import React,{useState} from 'react';

function App() {
  let testData =[{
    title:"title1",
    text:"item1"
  },
    {
      title:"title2",
      text:"item2"
    },
    {
      title:"title3",
      text:"item3"
    }];

  let [selIndex,selIndex_set] = useState(-1)

  function onListSelect(index){
    let _index = index //클로저

    return () => {
      console.log(_index)
      selIndex_set(_index)
    }
  }
  return (
    <div className="App">
      <h2>{selIndex}</h2>
      {
        testData.map((item,index)=>{
          return (
              <div className='list-item' key={index} onClick={onListSelect(index)}>
                <h1>{item.title}</h1>
                <h5>{item.text}</h5>
              </div>
          )
        })
      }
    </div>
  );
}

export default App;
