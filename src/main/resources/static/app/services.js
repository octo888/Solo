'use strict';

/* Services */

var soloServices = angular.module('soloServices', ['ngResource']);

soloServices.factory('BookList', ['$resource', function($resource) {
        return $resource('/books', {}, {
            query: {method:'GET', isArray:true}
        })
    }
]);

soloServices.factory('BookDetail', ['$resource', function($resource) {
    return $resource('book/:bookId', {
        bookId: '@id'
    }, {
        update: {
            method: "PUT"
        },
        remove: {
            method: "DELETE"
        }
    });
}]);



soloServices.factory('CartItems', ['$resource', function($resource) {
        return $resource('/getCart', {
            query: {method:'GET', isArray:true}
        })
}]);

soloServices.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(fd, uploadUrl){

        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
            .success(function(){

            })
            .error(function(){
            });
    }
}]);
