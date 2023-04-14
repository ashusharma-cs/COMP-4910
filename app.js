const express = require('express');
const ejs= require("ejs");
const PythonShell = require('python-shell');


const app=express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});


let api_script ="";
PythonShell.run('mainjson.py', null).then(messages=>{
    api_script = require("./relevant_tweets.json")
  });


  // JSON DATA ROUTE
app.get("/service",(req,res)=>{
    res.send(api_script);
});



app.listen(3000, ()=>{
    console.log("server started");
})