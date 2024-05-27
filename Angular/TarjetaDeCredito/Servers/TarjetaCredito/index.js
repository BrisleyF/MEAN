const http = require('http');
const router = require('./rest.js');
const express = require('express');
const app = express();

app.use(express.json());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE');
    next();
})
app.use('/api',router);

const server = http.createServer(app);

server.listen(3000,()=>console.log('servidor funcionando'));