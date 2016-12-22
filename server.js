// use express in server.js by requiring it
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://parkyngj:parkyngj1@ds141368.mlab.com:41368/quotes-tracker', function(err, database){
  if(err){
    return console.log(err)
  }

  db = database
  // create server where browsers can connect to
  // do so w/ help of listen method provided by express
  // app.listen(3000, function(){
  //   console.log('listening on 3000')
  app.listen(3000, function(){
    console.log('listening on 3000');
  });
});



// in express, handle GET request with get method
// app.get(path, callback)
app.get('/', function(request, response) {
  // Note: __dirname is directory that contains the JS source code
  // console.log(__dirname);
  //=> returns /Users/spark/proyects/quotes-tracker
  response.sendFile(__dirname + '/index.html')
});

app.post('/quotes', function(req, res){
  console.log(req.body);

  db.collection('quotes').save(req.body, function(err, result){
    if (err){
      return console.log(err)
    };

    console.log("saved to database");
    res.redirect('/');
  })
});
