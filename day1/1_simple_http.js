const http = require('http');

const http_server = http.createServer(function (req,res){
    console.log(req.url);
    res.end('hello http');
});

http_server.listen(8135);

console.log('server started at port 8135');