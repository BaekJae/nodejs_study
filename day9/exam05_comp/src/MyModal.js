import React,{useState} from 'react';

function MyModal(props) //props를 통한 컴포넌트 값 인자값 전달
{
    let _tempVal = ''
    let [bShow, bShow_Set] = useState(true)

    function onChangeInput(evt) {
        //props.setMsg(evt.target.value)
        _tempVal = evt.target.value
    }

    function onOk() {
        props.setMsg(_tempVal)
        bShow_Set(false)
    }

    return ( //인자값 전달도 props
        <div className="MyModal">
            {
                bShow ?
                    <div>
                        <h1>{props.title}</h1>
                        <input onChange={onChangeInput}/>
                        <button onClick={onOk}> ok</button>
                    </div>
                    : null
            }
        </div>
    )
}

export default MyModal;