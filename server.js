const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const barang = require('./Routes/api/Barang');


const app = express();
//Bodyarser Middleware
app.use(bodyParser.json());


// Mongo URL
const db = require('./config/key').mongoURL;

//Connect to mongo
mongoose
    .connect(db,{useNewUrlParser: true})
    .then(()=> console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/v1/api/barang',cors() ,barang);


// Port
let port = process.env.port || 5000;
app.listen(port, () => console.log('server started on Port  ' + port + '.....'));