(function() {
    'use strict';
    angular.module('soloApp')
        .controller('MainCtrl', ['$scope', 'ItemService', MainCtrl]);

    function MainCtrl($scope, ItemService) {

        ItemService.getAllItems().then(function(data){
            $scope.items = data;



        });



    }
}());
