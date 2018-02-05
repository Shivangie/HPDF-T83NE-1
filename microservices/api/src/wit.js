
//included all modules 
const {Wit, log} = require('node-wit'); //wit for nodejs
const express=require('express');
const http =require("http");
const bodyParser = require("body-parser");
const fs=require("fs");


const app=express(); // starting express app


const urlencodedParser=bodyParser.urlencoded({extended: false});
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.get('/',(req,res)=>{
res.end('Working wit ai app');
});

//Performed a get request which always works fine 
app.get('/input',(req,res)=>{                                                                                                              
  res.sendFile(__dirname+"/"+"form.html");

});


//Take input from a form and use client.message for that string
app.post('/input',(req,res)=>{
//  res.setHeader('Content-Type', 'application/json');
var textstring=req.body.message_text;
//client started, entities extracted, written as key value pairs
const client = new Wit({accessToken: 'ORCBDAKZ2KWBXPIBIKLMYUEHPBTKZ24D'});
client.message(textstring, {})
.then((data) => {
  console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
  var listEntities = {};
  var entry;
  var comma=',';
  for (var key in data['entities']) {
    entry=key;
    entry.concat(comma);
   // res.write("Key: " + key + " ");
    var mystring = data['entities'][key];
   // res.write("Value: " + mystring[0].value + "   ");
    listEntities[key]=mystring[0].value;
  }
  res.send(JSON.stringify(listEntities));
  res.end();
})
.catch(console.error);
});
   

//Started the app
app.listen (8080,()=>{
console.log("Server started on port 8080");

});