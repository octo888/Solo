/**
 * Created by Viktor Moroz on 12/2/15.
 */

(function() {
    'use strict';
    angular.module('soloApp')
        .controller('AdminCtrl', ['$scope', '$route', 'fileUpload', 'BookService', 'AdminService', AdminCtrl]);

    function AdminCtrl($scope, $route, fileUpload, BookService, AdminService) {
        $scope.addBook = addBook;
        $scope.removeBook = removeBook;
        $scope.getBooks = getBooks;
        $scope.getOrders = getOrders;

        function getBooks() {
            BookService.getAllBooks().then(function(data){
                $scope.books = data;
            });
        }
        function addBook () {
            var file = $scope.file;
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
        }

        function removeBook(id) {
            $scope.alert.success = true;
            /* AdminService.removeBook(id).then(function (result) {
             if(result) {
             $scope.alert.success = result;
             getBooks();
             }
             });*/
        }

        function getOrders() {
            AdminService.getOrders().then(function(data) {
                $scope.orders = data;
            })
        }
    }
}());