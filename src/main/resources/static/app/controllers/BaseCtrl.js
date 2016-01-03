

(function() {
    'use strict';
    angular.module('soloApp')
        .controller('BaseCtrl', ['$scope', '$rootScope', 'CartService', BaseCtrl]);

    function BaseCtrl($scope, $rootScope, CartService) {
        $scope.cartLength = CartService.getCartLength;
        $scope.addToCart = addToCart;
        $rootScope.alertClean = alertClean;
        $scope.alert = {
            success: false,
            error: false
        };


        function addToCart(book) {
            CartService.addToCart(book);
        }

        function alertClean() {
            $scope.alert = {
                success: false,
                error: false
            };
        }
    }
}());