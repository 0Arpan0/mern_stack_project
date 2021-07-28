const dotenv = require('dotenv');
const mongoose = require('mongoose')
const express = require('express');
const app = express();
const cookieParser = require('cookie-Parser');

dotenv.config({ path: './config.env' });
require('./db/conn');

app.use(cookieParser());

app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;



//middleware

// const middleware = (req,res,next) => {
//     console.log(`Hello my middleware`);
//     next();
// }

app.get('/', (req, res) => {
        res.send(`Hello world from the server`);

});





app.get('/contact', (req, res) => {
    res.send(`Hello contact from the server`);

});

app.get('/signin', (req, res) => {
    res.send(`Hello login from the server`);

});

app.get('/signup', (req, res) => {
    res.senD(`Hello registration from the server`);

});

app.listen(5000, () => {
    console.log(`server is running at port ${PORT}`);

})

