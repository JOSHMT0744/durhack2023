/* eslint-disable n/no-path-concat */
/* eslint-disable no-undef */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.json());
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client')));

if (typeof DOMException === 'undefined') {
   global.DOMException = require('domexception');
 }

 module.exports = app;
