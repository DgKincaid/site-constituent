import { Application, Request, Response } from 'express';
import { config } from 'dotenv';

import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';

import express = require('express');
import morgan = require('morgan');
import dotenv = require('dotenv');
import cors from 'cors';

import bodyParser = require('body-parser');
import cookieParser = require('cookie-parser');

import AuthRouter from './routes/auth';

const app: Application = express();

const results = config();

if (results.error) {
    throw results.error;
}
console.log(process.env.SEC);
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use( bodyParser.json() );

app.use( morgan('dev') );

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/auth', AuthRouter.router);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

