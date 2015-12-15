/**
 * Created by Viktor Moroz on 12/2/15.
 */

(function() {
    angular.module("soloApp")
        .factory("CartService", ['$localStorage', '$http', CartService]);

    function CartService($localStorage, $http) {
       // $localStorage.cart = [];

        return {
            getCart: getCart,
            addToCart: addToCart,
            cartAmount: cartAmount,
            addOrder: addOrder
        };

        function getCart() {
            return $localStorage.cart;
        }

        function addToCart(book) {
            $localStorage.cart.push(book);
        }

        function cartAmount() {
            return function () {
                var total = 0;
                if($localStorage.cart) {
                    for (var i = 0; i < $localStorage.cart.length; i++) {
                        total += $localStorage.cart[i].price;
                    }
                }
                return total;
            }
        }

        function addOrder(order, itemsId) {
            return $http({
                method: 'POST',
                url: "/addOrder",
                responseType: "json",
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined},
                params: {username: order.username, email: order.email, amount: order.amount, items: itemsId}
            }).then(function (response) {

            });
        }

    }
}());