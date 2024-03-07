const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    published: {
        type: Number,
        required: true
    },
    state: {
        type: Boolean,
        default: false,
        required: true
    }

});

module.exports = mongoose.model('Book', bookSchema);