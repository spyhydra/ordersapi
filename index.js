const { log } = require('console');
const express=require('express');
const app =express();
const port=8080;
const db=require('./config/mongoose');
const passportJWT=require('./config/passport-JWT');
const passport=require('passport')
const bcrypt=require('bcrypt')


app.use(express.urlencoded());

const indexRoutes = require('./routes/index')
app.use('/',indexRoutes);



app.listen(port,function(err){
    if(err){console.log("error in starting server");}
       
    console.log('Server starting on port no ', port);

})
