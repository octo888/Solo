(function() {
    'use strict';
    angular.module('soloApp')
        .controller('MainCtrl', ['$scope', 'ItemService', MainCtrl]);

    function MainCtrl($scope, ItemService) {
        $scope.count = 0;
        $scope.countPrev = countPrev;
        $scope.countNext = countNext;
        var content;
        ItemService.getAllItems().then(function(data){
            content = data;
            var arr = [];
            for (var i = $scope.count; i < 4; i++) {
                arr.push(data[i]);
            }
            $scope.items = arr;
        });

        function countNext() {
            if ($scope.count < content.length - 4) {
                $scope.count++;
                var len = 4 + $scope.count;
                var arr = [];

                for (var i = $scope.count; i < len; i++) {
                    if (content[i]) {
                        arr.push(content[i]);
                    }
                }
                $scope.items = arr;
            }
        }

        function countPrev() {
            if ($scope.count > 0) {
                $scope.count--;
                var len = 4 + $scope.count;
                var arr = [];

                for (var i = $scope.count; i < len; i++) {
                    arr.push(content[i]);
                }
                $scope.items = arr;
            }
        }
    }
}());
