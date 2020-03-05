const express = require('express');

const app = express();

//Require Database
require('./config/db');

const bodyParser = require('body-parser');

//Routes
const user = require('./routes/user.route');

//set up of Express
app.use(bodyParser.json());
app.use('/user',user);

//Server Listening
app.listen(3000,()=>{
    console.log("Server Started");
});


