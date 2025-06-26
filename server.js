const express = require("express")

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended : false}));
app.use(express.static(__dirname + '/client/'));

// Basic Endpoints 
    app.get('/',(req, res) => {
        // res.writeHead(200,{ 'Content-Type':'html' })
        res.status(200)
        res.sendFile( __dirname + '/index.html')
    })
    app.get('/choosescreen',(req, res) => {
        // res.writeHead(200,{ 'Content-Type':'html' })
        res.status(200)
        res.sendFile( __dirname + '/client/choose.html')
    })
    app.get('/learn',(req, res) => {
        // res.writeHead(200,{ 'Content-Type':'html' })
        res.status(200)
        res.sendFile( __dirname + '/client/learn.html')
    })
    app.get('/fp-info',(req, res) => {
        // res.writeHead(200,{ 'Content-Type':'html' })
        res.status(200)
        res.sendFile( __dirname + '/client/info.html')
    })
    app.get('/tp',(req, res) => {
        // res.writeHead(200,{ 'Content-Type':'html' })
        res.status(200)
        res.sendFile( __dirname + '/client/two-player.html')
    })
    app.get('/fp',(req, res) => {
        // res.writeHead(200,{ 'Content-Type':'html' })
        res.status(200)
        res.sendFile( __dirname + '/client/four-player.html')
    })
    app.get('/tpgameoffline',(req, res) => {
        // res.writeHead(200,{ 'Content-Type':'html' })
        res.status(200)
        res.sendFile( __dirname + '/client/two-game.html')
    })
    app.get('/fpchoose',(req, res) => {
        // res.writeHead(200,{ 'Content-Type':'html' })
        res.status(200)
        res.sendFile( __dirname + '/client/four-choose.html')
    })
    app.get('/fpindi',(req, res) => {
        // res.writeHead(200,{ 'Content-Type':'html' })
        res.status(200)
        res.sendFile( __dirname + '/client/four-game-individual.html')
    })
    app.get('/fpteams',(req, res) => {
        // res.writeHead(200,{ 'Content-Type':'html' })
        res.status(200)
        res.sendFile( __dirname + '/client/four-game-teams.html')
    })
    
//! LISTEN
app.listen(port,() => {
    console.log(`Listening to http://localhost:${port}/`)
})