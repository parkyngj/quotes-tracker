// use express in server.js by requiring it
const express = require('express');
const app = express();

// create server where browsers can connect to
// do so w/ help of listen method provided by express
app.listen(3000, function(){
  console.log('listening on 3000')
})

// in express, handle GET request with get method
// app.get(path, callback)
app.get('/', function(request, response) {
  response.send("Hello World")
})
