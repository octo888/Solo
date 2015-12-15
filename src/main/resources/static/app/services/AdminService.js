/**
 * Created by Viktor Moroz on 12/2/15.
 */

(function() {
    angular.module("soloApp")
        .factory("AdminService", ['$http', AdminService]);

    function AdminService($http) {
        return {
            removeBook: removeBook,
            getOrders: getOrders
        };

        function removeBook(bookId) {
            return $http({
                url: "/removeBook",
                responseType: "json",
                params: {bookId: bookId}
            }).then(function () {
                return true;
            });
        }

        function getOrders() {
            return $http({
                url: "/getOrderList",
                responseType: "json"
            }).then(function (response) {
                return response.data;
            });
        }
    }
}());