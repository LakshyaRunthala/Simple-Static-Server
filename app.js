const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

//importing the routes 
const userRoute = require('./routes/user');
const adminRoute = require('./routes/admin');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use('/user',userRoute);
app.use('/admin',adminRoute);
app.use(express.static(path.join(__dirname, "public")));

app.listen(port,()=>{
    console.log("Server listening on port :",port);
});
