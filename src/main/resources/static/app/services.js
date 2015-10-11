'use strict';

/* Services */

var soloServices = angular.module('soloServices', ['ngResource']);

soloServices.factory('BookList', ['$resource',
    function($recourse) {
        return $recourse('/books', {}, {
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

soloServices.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(fd, uploadUrl){
        /*var fd = new FormData();
        fd.append('name', name);
        fd.append('file', file);*/
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
