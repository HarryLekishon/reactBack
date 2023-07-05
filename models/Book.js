const mongoose = require('mongoose');

const Schema = mongoose.Schema

const bookSchema = new Schema({
    image:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Book", bookSchema);

