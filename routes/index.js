var Book = require('./../server/models/book').Book;

module.exports = function (app) {
  
  app.get('/', function (req, res) {
    res.render('layout');
  });
  
  app.get('/getbooks', function (req, res) {
    Book.find({}, function (err, book) {
      if (book) {
        res.json(book);
      } else {
        console.log("error find post!");
      }
    });
  });
  
  app.post('/getbook', function (req, res) {
    var bookId = req.body.id;
    Book.findById(bookId, function (err, book) {
      if (book) {
        res.json(book);
      } else {
        console.log("error find post!");
      }
    });
  });
  
  app.post('/addbook', function (req, res) {
    var book = new Book(req.body);
    book.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        res.status(200);
        res.end();
      }
    });
  });
  
  app.post('/delbook', function (req, res) {
    var bookId = req.body.id;
    Book.remove({ _id: bookId }, function (err) {
      if (err) {
        console.log(err);
      } else {
        res.status(200);
        res.end();
      }
    });
  });
  
  app.post('/changestatus', function (req, res) {
    var bookId = req.body.id;
    var bookStatus = req.body.status;
    Book.update({ _id: bookId }, { $set: { status: bookStatus } }, function (err, result) {
      if (err) throw err;
    });
  });

  app.post('/changerating', function (req, res) {
    var bookId = req.body.id;
    var bookRating = req.body.rating;
    Book.update({ _id: bookId }, { $set: { rating: bookRating } }, function (err, result) {
      if (err) throw err;
    });
  });

  app.post('/changebook', function (req, res) {
    var bookId = req.body._id;
    var newBook = req.body;
    Book.update({ _id: bookId }, { $set: { author: newBook.author, title: newBook.title, description: newBook.description, status: newBook.status } }, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.status(200);
        res.end();
      }
    });
  });
};


