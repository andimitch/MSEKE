
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/dbConnect')

const express = require('express');
const app = express();
const path = require('path');
const {logger} = require('./middleware/logEvents');
const cors = require('cors');
const { connect } = require('http2');
const PORT = process.env.PORT || 3500

//connectDB();

// custom middleware
app.use(logger);

/*
// not working?? 
// Cross Origin Resource Sharing
const whitelist = ['https://www.google.ca/'];
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
*/
var insertRouter = require('./trial/insert-route');
app.use('/', insertRouter);

// built in middleware
//  handled for all routes
app.use(express.urlencoded({ extended: false })); // handing form data
app.use(express.json()); // is json data is submitted
app.use(express.static(path.join(__dirname, '/public'))); // allows you to find things in the public folder (withouth this css wouldn't link)

// routes
app.use('/', require('./routes/root'));


app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})


mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})

