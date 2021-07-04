const express = require('express');
const morgan = require('morgan');
const router = require('./routes/routes');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', router);

module. exports = app;