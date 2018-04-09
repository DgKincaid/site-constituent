import { urlencoded, json } from 'body-parser';
import {} from 'morgan';
import {} from 'passport';
import {} from 'jsonwebtoken';
import { Application } from 'express';

import express = require('express');
import morgan = require('morgan');

let app: Application = express();

app.use(urlencoded({
    extended: false
}))

app.use( json() );
 
app.use( morgan('dev') );

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})

