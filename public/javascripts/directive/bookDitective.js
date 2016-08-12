(function () {
  'use strict';

  angular
      .module('app')
      .directive('bookDitective', bookDitective);

  bookDitective.$inject = ['$window', 'bookFactory'];

  function bookDitective($window, bookFactory) {
    var directive = {
      link: link,
      restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {

      var bookId = {};
      
      scope.deleteBook = function (bookID) {
        bookId.id = bookID;
        bookFactory.deleteBook(bookId)
            .then(function (data) {
              if (data) {
                scope.vm.books.splice(element.sectionRowIndex, 1);
                scope.vm.showDesc = 0;
              }
            });
      }

      scope.changeStatus = function (status, id) {
        bookId.status = !status;
        bookId.id = id;
        bookFactory.changeStatus(bookId);
      }

      scope.setRating = function(rating, id) {
        bookId.rating = rating;
        bookId.id = id;
        console.log(rating, id);
        bookFactory.changeRating(bookId);
      }
    }
  }
})();