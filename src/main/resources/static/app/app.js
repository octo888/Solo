'use strict';

/* App Module */

var soloApp = angular.module('soloApp', [
    'ngRoute',
    'ngResource',

    'soloControllers',
    'soloServices',
    'soloFilters',
    'soloDirectives'
]);

soloApp.config(['$routeProvider', '$locationProvider', '$httpProvider',
    function($routeProvider, $locationProvider, $httpProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider.
            when('/', {
                templateUrl: './partials/home.html',
                controller: 'HomeCtrl'
            }).
            when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'LoginCtrl'
            }).
            when('/admin/add-book', {
                templateUrl: 'partials/admin/add-book.html',
                controller: 'AddBookCtrl'
            }).
            when('/book/:bookId', {
                templateUrl: 'partials/book-detail.html',
                controller: 'BookDetailCtrl'
            }).
            when('/cart', {
                templateUrl: 'partials/cart.html',
                controller: 'CartCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });

        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    }]);