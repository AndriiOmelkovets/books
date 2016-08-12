(function () {
    'use strict';

    angular.module('app').config(confRouter);

    confRouter.$inject = ['$routeProvider', '$locationProvider'];

    function confRouter($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', {
            templateUrl: './views/index.html',
            controller: 'booksCtrl',
            controllerAs: 'vm'
        })
        .when('/add', {
            templateUrl: './views/add.html',
            controller: 'booksCtrl',
            controllerAs: 'vm'
        })
        .when('/edit/:id', {
            templateUrl: './views/edit.html',
            controller: 'booksCtrl',
            controllerAs: 'vm'
        });
    }
})();