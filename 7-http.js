const http=require('http');

const server=http.createServer( (req,res) =>{
    if(req.url==='/'){
        res.end("Welcome to our Home Page")
    }
    if(req.url==='/about'){
        res.end("Welcome to our About Page")
    }
    res.end(`<h1>Sorry!</h1>
This page doesn't exist 
<a href="/">Back Home</a>`)
})
server.listen(5000)