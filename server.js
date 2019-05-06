const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
var session = require('express-session')
const barang = require('./Routes/api/Barang');
const user = require('./Routes/api/User');

const dotenv = require('dotenv');
dotenv.config();

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


const corsOptions = {
    origin:'http://localhost:5000',
    optionsSuccessStatus: 200
}

// Use Routes
//API Barang
app.use('/v1/api/barang',cors(corsOptions) ,barang);
//API User AUTH
app.use('/v1/api/user',cors(corsOptions),user);

// app.use(['/v1/api/barang,/v1/api/user'], cors(), [barang,user]);

// Port
let port = process.env.port ;
app.listen(port, () => console.log('server started on Port  ' + port + '.....'));