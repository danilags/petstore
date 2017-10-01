const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const pet = require('./routes/pet');

mongoose.connect('mongodb://localhost/petstores');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/pet', pet);

mongoose.connection.on('Mongoose is connected !', () => {
  console.log("Database is connected !")
})

app.listen(3000, () => {
  console.log("Server is running on port 3000 !")
})
