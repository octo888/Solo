

(function() {
    'use strict';
    angular.module('soloApp')
        .controller('HomeCtrl', ['$scope', 'BookService', HomeCtrl]);

    function HomeCtrl($scope, BookService) {
        BookService.getAllBooks().then(function(data){
            $scope.books = data;
        });
    }
}());
