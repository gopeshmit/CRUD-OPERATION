const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Schema")
.then(()=>{
    console.log("Connected to Database")
}).catch(()=>{
    console.log("Not Connected to Database");
});

