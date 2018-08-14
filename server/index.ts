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
import TaskRouter from './routes/task';

import DbHelper from './db/index';

const expressJwt = require('express-jwt');

const app: Application = express();

const results = config();

const checkAuthentication = expressJwt({
    secret: process.env.SEC
});

DbHelper.init();
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
// app.route('/api/tasks').get(checkAuthentication, TaskRouter.router);
app.use('/api/tasks', checkAuthentication, TaskRouter.router);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

