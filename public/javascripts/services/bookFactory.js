(function () {
  'use strict';

  angular
      .module('app')
      .factory('bookFactory', bookFactory);

  bookFactory.$inject = ['$http', '$q'];

  function bookFactory($http, $q) {
    var service = {
      getData: getData,
      addBook: addBook,
      deleteBook: deleteBook,
      getDataBook: getDataBook,
      changeStatus: changeStatus,
      changeRating: changeRating,
      changeBook: changeBook
    };

    return service;

    function getData() {
      return $http.get('/getbooks');
    }

    function addBook(data) {
      var q = $q.defer();
      $http.post('/addbook', JSON.stringify(data), {
        method: "POST",
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      }).then(handleSuccess, handleError);
      function handleSuccess(response) {
        q.resolve(true);
      };
      function handleError(error) {
        console.log("Error");
        q.resolve(false);
      };
      return q.promise;
    }

    function changeStatus(data) {
      var q = $q.defer();
      $http.post('/changestatus', JSON.stringify(data), {
        method: "POST",
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      }).then(handleSuccess, handleError);
      function handleSuccess(response) {
        q.resolve(response);
      };
      function handleError(error) {
        console.log("Error");
        q.resolve(error);
      };
      return q.promise;
    }

    function changeRating(data) {
      var q = $q.defer();
      $http.post('/changerating', JSON.stringify(data), {
        method: "POST",
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      }).then(handleSuccess, handleError);
      function handleSuccess(response) {
        q.resolve(response);
      };
      function handleError(error) {
        console.log("Error");
        q.resolve(error);
      };
      return q.promise;
    }

    function changeBook(data) {
      var q = $q.defer();
      $http.post('/changebook', JSON.stringify(data), {
        method: "POST",
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      }).then(handleSuccess, handleError);
      function handleSuccess(response) {
        q.resolve(response);
      };
      function handleError(error) {
        console.log("Error");
        q.resolve(error);
      };
      return q.promise;
    }
    
    function deleteBook(data) {
      var q = $q.defer();
      $http.post('/delbook', JSON.stringify(data), {
        method: "POST",
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      }).then(handleSuccess, handleError);
      function handleSuccess(response) {
        q.resolve(true);
      };
      function handleError(error) {
        console.log("Error");
        q.resolve(false);
      };
      return q.promise;
    }

    function getDataBook(data) {
      var q = $q.defer();
      $http.post('/getbook', JSON.stringify(data), {
        method: "POST",
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      }).then(handleSuccess, handleError);
      function handleSuccess(response) {
        q.resolve(response);
      };
      function handleError(error) {
        console.log("Error");
        q.resolve(error);
      };
      return q.promise;
    }
  }
})();