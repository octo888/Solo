'use strict';

angular.module("soloApp", ['pascalprecht.translate', 'ngRoute', 'ngCookies', 'ngStorage'])
    .config(['$translateProvider', '$httpProvider', '$routeProvider', function ($translateProvider, $httpProvider, $routeProvider) {
        'use strict';
        $routeProvider.
            when('/', {
                templateUrl: './partials/main.html',
                controller: 'MainCtrl'
            }).
            when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'LoginCtrl'
            }).
            when('/admin/add-item', {
                templateUrl: 'partials/admin/add-item.html',
                controller: 'AdminCtrl',
                requireLogin: true
            }).
            when('/admin/remove-item', {
                templateUrl: 'partials/admin/remove-item.html',
                controller: 'AdminCtrl',
                requireLogin: true
            }).
            when('/admin/orders', {
                templateUrl: 'partials/admin/orders.html',
                controller: 'AdminCtrl',
                requireLogin: true
            }).
            when('/item/:itemId', {
                templateUrl: 'partials/item-detail.html',
                controller: 'ItemCtrl'
            }).
            when('/cart', {
                templateUrl: 'partials/cart.html',
                controller: 'CartCtrl'
            }).
            when('/add-order', {
                templateUrl: 'partials/add-order.html',
                controller: 'CartCtrl'
            }).
            when('/order/:orderId', {
                templateUrl: 'partials/order-details.html',
                controller: 'OrderCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });

        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    }])
    .run(function ($rootScope, $location) {

        $rootScope.$on('$routeChangeStart', function (event, next, curent) {
            $rootScope.alertClean();

            if (next.requireLogin) {
                if (!$rootScope.authenticated) {
                    $location.path('login');
                }
            }
        });
    });
