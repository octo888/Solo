
(function() {
    'use strict';
    angular.module('soloApp')
        .controller('AdminCtrl', ['$scope', '$route', 'fileUpload', 'BookService', 'AdminService', AdminCtrl]);

    function AdminCtrl($scope, $route, fileUpload, BookService, AdminService) {
        $scope.addItem = addItem;
        $scope.removeBook = removeBook;
        $scope.getBooks = getBooks;
        $scope.getOrders = getOrders;

        $scope.inputs = [];
        $scope.addField=function(){
            $scope.inputs.push({});
        };

        function getBooks() {
            BookService.getAllBooks().then(function(data){
                $scope.books = data;
            });
        }

        function addItem () {
            var inputs = angular.toJson($scope.inputs);
            var file1 = $scope.file1;
            var file2 = $scope.file2;
            var file3 = $scope.file3;
            var file4 = $scope.file4;

            var fd = new FormData();
            fd.append('name', $scope.name);
            fd.append('desc', $scope.desc);
            fd.append('price', $scope.price);

            fd.append('charact', inputs);

            fd.append('file1', file1);
            fd.append('file2', file2);
            fd.append('file3', file3);
            fd.append('file4', file4);
            fileUpload.uploadFileToUrl(fd, "/addItem");

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