const express = require('express');
const router = require('./routes/routes');
const db = require('./db');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(router);

db()
  .then(() => {
    app.listen(3000, () => {
      console.log('Listening on port 3000');
    });
  });
