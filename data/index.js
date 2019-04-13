const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const users = require('./routes');
const auth = require('./auth');
const express = require('express');
const app = express();
 
mongoose.connect('mongodb://127.0.0.1:27017/myapp', {useNewUrlParser: true})
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));
 
app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);
 
const port = process.env.PORT || 27017;
app.listen(port, () => console.log(`Listening on port ${port}...`));