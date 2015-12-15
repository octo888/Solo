/**
 * Created by Viktor Moroz on 12/2/15.
 */

(function() {
    'use strict';
    angular.module('soloApp')
        .controller('BookCtrl', ['$scope', '$routeParams', 'BookService', BookCtrl]);

    function BookCtrl($scope, $routeParams, BookService) {
        var bookId = $routeParams.bookId;

        BookService.getBookDetails(bookId).then(function(data) {
            $scope.book = data;
        });
    }
}());
