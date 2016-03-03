(function() {
    'use strict';
    angular.module('soloApp')
        .controller('MainCtrl', ['$scope', 'ItemService', MainCtrl]);

    function MainCtrl($scope, ItemService) {
        ItemService.getAllItems().then(function(data){
            console.log(data);
            $scope.items = data;
        });
    }
}());
