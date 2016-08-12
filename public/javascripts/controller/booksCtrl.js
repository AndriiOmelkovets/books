(function () {
  'use strict';

  angular
      .module('app')
      .controller('booksCtrl', booksCtrl);

  booksCtrl.$inject = ['$location', 'bookFactory'];

  function booksCtrl($location, bookFactory) {
    /* jshint validthis:true */
    var vm = this;
    vm.newBook = {};
    vm.books = [];
    vm.showDesc = null;
    
    bookFactory.getData().then(function (data) {
      vm.books = data.data;
    });

    vm.addBook = function () {
      bookFactory.addBook(vm.newBook)
          .then(function (data) {
            vm.books.push(data);
            $location.path('/');
          });
    }
  }
})();
