const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const petSchema = new Schema({
  name : { type: String, required: true },
  age  : { type: Number, required: true },
  photo: { type: String, default: '' }
})

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
