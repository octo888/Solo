/**
 * Created by Viktor Moroz on 12/2/15.
 */

(function() {
    'use strict';
    angular.module('soloApp')
        .controller('CartCtrl', ['$scope', 'CartService', CartCtrl]);

    function CartCtrl($scope, CartService) {
        $scope.cart = CartService.getCart();
        $scope.addOrder = addOrder;
        $scope.cartAmount = CartService.cartAmount();

        function addOrder() {
            var items = CartService.getCart();
            function itemsId() {
                var arr = [];
                for(var i = 0; i < items.length; i++) {
                    arr.push(items[i].id);
                    return arr;
                }
            }

            $scope.order.amount = $scope.cartAmount();
            CartService.addOrder($scope.order, itemsId()).then(function(data) {

            });
        }
    }
}());