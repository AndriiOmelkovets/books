// models/book.js

var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds153835.mlab.com:53835/mybook');

var Schema = mongoose.Schema;

var SchemaBook = new mongoose.Schema({
    author: String,
    title: String,
    rating: { type: Number, default: null },
    status: { type: Boolean, default: false },
    description: String
});

exports.Book = mongoose.model('Book', SchemaBook);