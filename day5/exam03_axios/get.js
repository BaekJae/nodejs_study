import axios from "axios";

axios.get('http://localhost:8125/echo?title=hello&msg=nodejs')
.then((res) => {
    console.log(res);

})
.catch((err) => {
    console.log(err);
})