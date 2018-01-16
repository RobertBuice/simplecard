var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FlashCardSchema = new Schema({
    question: String,
    answer: String
});

var FlashCard = mongoose.model('FlashCard', FlashCardSchema );