const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public'))); 

var mysql = require('mysql');
var glasses = require('./glasses.json');
var connection = mysql.createConnection({
  host     : glasses.host,
  user     : glasses.user,
  password : glasses.password,
  database : glasses.database

});
connection.connect();

app.get('/main', function(req, res){
    res.render('main');
})

app.get('/testPage', function(req, res){
    res.render('testPage');
})

app.get('/result', function(req, res){
    res.render('result');
})
app.get('/test1', function(req, res){
    res.render('test1');
})
app.get('/test2', function(req, res){
    res.render('test2');
})
app.get('/test3', function(req, res){
    res.render('test3');
})
app.get('/test4', function(req, res){
    res.render('test4');
})
app.post('/test1',function(req,res){
    var data = {'name' : req.body.name, 'phone': req.body.phone}
    res.json(data)
})
app.post('/test4',function(req,res){
    if (error) throw error;
    else {
        console.log("전송 성공");
         res.json({ok : true});
    }
})

app.listen(8000)
