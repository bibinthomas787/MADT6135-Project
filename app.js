const bodyParser = require('body-parser');
const express = require('express');

const path = require('path');
const routes = require('./routes/index');
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/', routes);
app.use(bodyParser.urlencoded({ extended: true }));
module.exports = app;
