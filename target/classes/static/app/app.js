'use strict';

/* App Module */

var soloApp = angular.module('soloApp', [
    'ngRoute',
    'ngStorage',
    'ngCookies',

    'soloFilters',
    'soloDirectives'
]);

soloApp.config(['$routeProvider', '$httpProvider',
    function ($routeProvider, $httpProvider) {

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
                controller: 'AdminCtrl'
            }).
            when('/admin/remove-book', {
                templateUrl: 'partials/admin/remove-book.html',
                controller: 'AdminCtrl'
            }).
            when('/admin/orders', {
                templateUrl: 'partials/admin/orders.html',
                controller: 'AdminCtrl'
            }).
            when('/book/:bookId', {
                templateUrl: 'partials/book-detail.html',
                controller: 'BookCtrl'
            }).
            when('/cart', {
                templateUrl: 'partials/cart.html',
                controller: 'CartCtrl'
            }).
            when('/order', {
                templateUrl: 'partials/order.html',
                controller: 'OrderCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });

        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    }]).run(function ($rootScope, $localStorage) {

    $rootScope.cartLength = $localStorage.cart.length;
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.alertClean();
    });
});