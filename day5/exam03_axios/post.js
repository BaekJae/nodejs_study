import axios from "axios";

axios({
    method : 'POST', //GET은 type : 'GET'
    url : 'http://localhost:8125/echo',
    data : 'hello axios',
    headers : {
        'my-custom-header' : 'hi'
    }
}).then((res) =>{
    //console.log(res);
    console.log(res.status);
    console.log(res.data);
}).catch(err => { //인자가 하나일 경우, 괄호 생략 가능
    //console.log(err);
    console.log(err.code) //에러코드
})