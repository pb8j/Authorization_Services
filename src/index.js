const express = require('express');

const {PORT} = require('./config/srverconfig');

const app = express() ;

const prepareAndStartServer = () => {
    app.listen(3002,() => {
        console.log('\x1b[32m%s\x1b[0m',`Server Started on Port: ${PORT}`);
    });
}

prepareAndStartServer();