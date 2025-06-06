const express = require("express")

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended : false}));
app.use(express.static(__dirname + '/client/'));

// Endpoints 
    app.get('/',(req, res) => {
        // res.writeHead(200,{ 'Content-Type':'html' })
        res.status(200)
        res.sendFile( __dirname + '/client/index.html')
    })


//! LISTEN
app.listen(port,() => {
    console.log(`Listening to http://localhost:${port}/`)
})