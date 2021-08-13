import axios from "axios";

(async function(){
    try {
        let res = await axios({
            method: 'POST',
            url: "http://localhost:8125/echo",
            data: "hello axios",
            headers: {
                'my-custom-header': 'hi'
            }
        })
        //console.log(res);
        console.log(res.status);
        console.log(res.data);
    }
    catch(e){
        //console.log(e);
        console.log(e.code);
    }
})();