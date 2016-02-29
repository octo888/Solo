

(function() {
    'use strict';
    angular.module('soloApp')
        .controller('MainCtrl', ['$scope', 'BookService', MainCtrl]);

    function MainCtrl($scope, BookService) {
        BookService.getAllBooks().then(function(data){
            console.log(data);
            $scope.books = data;
        });
    }
}());
