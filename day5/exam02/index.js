import fetch from "node-fetch";

(async function() {
    let res = await(await fetch('http://localhost:8125/echo',
        {
            method: 'POST',
            body: 'hello post',
            headers: {
                'my-custom-header' : 'hi'
            }
        })).json();
    console.log(res);
})();