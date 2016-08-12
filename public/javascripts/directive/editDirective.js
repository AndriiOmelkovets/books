(function () {
  'use strict';

  angular
      .module('app')
      .directive('editDirective', editDirective);

  editDirective.$inject = ['$location', '$window', '$routeParams', 'bookFactory'];

  function editDirective($location, $window, $routeParams, bookFactory) {
    var directive = {
      link: link,
      restrict: 'EA'
    };
    return directive;



    function link(scope, element, attrs) {
      var editBookId = {};
      scope.book = [];

      editBookId.id = $routeParams.id;
      bookFactory.getDataBook(editBookId)
        .then(function (response) {
          scope.book = response.data;
        });

      scope.changeBook = function () {
        bookFactory.changeBook(scope.book).then(function () {
          $location.path('/');
        });
      }
    }
  }

})();