const express=require('express');
const port=8000;
const path=require('path');
const app=express();

//express to set ejs as view engine
app.set('view engine','ejs');

//setting view path
app.set('views',path.join(__dirname,'views'));



//request-response
app.get('/',function(req,res){
    return res.render('home');
})


app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("My express server running on port:",port);
})
