const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('welcome to our home page')
        // res.end()
    } else if (req.url == '/about') {
        res.end('Here is a brief history about us.')
        // res.end()
    } else {
        res.end(`
    <h1>Oops !</h1>
    <p>iwe cant seem to find the page you are looking for.</p>
    <a href="/">Back Home</a>
    `)
    }



})

server.listen(5000)