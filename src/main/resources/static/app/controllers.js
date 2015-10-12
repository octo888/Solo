'use strict';

/* Controllers */
var soloControllers = angular.module('soloControllers', []);

soloApp.controller('HomeCtrl', ['$scope', '$rootScope', 'BookList',
    function ($scope, $rootScope, BookList) {

        $scope.books = BookList.query();

        var arr = [];
        $scope.addToCart = function (book) {
            arr.push(book);
            $rootScope.cartSum = arr.length;
            $rootScope.cartItems = arr;
        };


    }]);

soloApp.controller('CartCtrl', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {
    var items = $rootScope.cartItems;
    $scope.cart = $rootScope.cartItems;
    $scope.orderSum = function() {
        var total = 0;
        for(var i = 0; i < items.length; i++) {
            total += items[i].price;
        }
        return total;
    };

    $scope.addOrder = function() {
        var formData = new FormData();
        formData.append('username', $scope.username);
        formData.append('email', $scope.email);
        formData.append('items', $scope.cart);
        $http.post('ord', formData, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        });

    };
}]);

soloApp.controller('LoginCtrl', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {

        var authenticate = function (credentials, callback) {

            var headers = credentials ? {
                authorisation: 'Basic' + btoa(credentials.username + ":" + credentials.password)
            } : {};

            $http.get('user', {headers: headers}).success(function (data) {
                if (data.name) {
                    $rootScope.authenticated = true;
                } else {
                    $rootScope.authenticated = false;
                }
                callback && callback();
            }).error(function () {
                $rootScope.authenticated = false;
                callback && callback();
            });
        };

        authenticate();

        $scope.credentials = {};
        $scope.login = function () {
            authenticate($scope.credentials, function () {
                if ($rootScope.authenticated) {
                    $location.path('/');
                    $scope.error = false;
                } else {
                    $location.path('/login');
                    $scope.error = true;
                }
            })
        };

        $scope.logout = function () {
            $http.post('logout', {}).success(function () {
                $rootScope.authenticated = false;
                $location.path("/");
            }).error(function (data) {
                $rootScope.authenticated = false;
            });
        }
    }]);

soloApp.controller('AddBookCtrl', ['$scope', '$route', 'fileUpload',
    function ($scope, $route, fileUpload) {

        $scope.submit = function () {

            var file = $scope.file;
            console.log('file is ');
            console.dir(file);

            var fd = new FormData();
            fd.append('name', $scope.name);
            fd.append('author', $scope.author);
            fd.append('desc', $scope.desc);
            fd.append('price', $scope.price);
            fd.append('publisher', $scope.publisher);
            fd.append('publishYear', $scope.publishYear);
            fd.append('isbn', $scope.isbn);
            fd.append('cover', $scope.cover);
            fd.append('file', file);

            fileUpload.uploadFileToUrl(fd, "/addbook");
            $route.reload();
        };

    }]);

soloApp.controller('BookDetailCtrl', ['$scope', '$routeParams', 'BookDetail',
    function ($scope, $routeParams, BookDetail) {

        $scope.bookId = $routeParams.bookId;

        BookDetail.get({bookId: $routeParams.bookId}, function (data) {
            $scope.book = data;
        })
    }]);

