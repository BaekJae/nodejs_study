import fetch from 'node-fetch'
/*
fetch('http://localhost:8125/echo?title=hello&msg=nodejs')
.then((res) =>{
    //console.log(res.json());
    return res.json()
})
.then((jsonObj)=>{
    console.log(jsonObj);
})*/


(async function(){
    let res = await (await fetch('http://localhost:8125/echo?title=hello&msg=nodejs')).json();
    console.log(res);
})()