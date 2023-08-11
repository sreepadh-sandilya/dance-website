const express= require('express');
const fs= require('fs');
const app=express();
const path=require('path');
const port=80;

// for serving static files
app.use('/static',express.static('static'));
app.use(express.urlencoded());

//set template engine for pug
app.set('view engine','pug');

//set the views directory
app.set('views',path.join(__dirname,'views'));

app.get("/",(req,res)=>{

    const params={};
    res.status(200).render('home.pug',params)
})

app.get("/contact",(req,res)=>{

    const params={};
    res.status(200).render('contact.pug',params)
})

app.listen(port,()=>{
    console.log(`the application started sucessfully on port ${port}`);
})