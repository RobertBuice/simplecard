const express = require('express');
var mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

var mongoDB = 'mongodb://127.0.0.1/my_database';

mongoose.connect(mongoDB, {
  useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var api = require('./api/index');

app.use('/api', api);

app.listen(port, () => console.log(`Listening on port ${port}`));