
(function() {
    angular.module("soloApp")
        .factory("AdminService", ['$http', AdminService]);

    function AdminService($http) {
        return {
            authenticate: authenticate,
            removeBook: removeBook,
            getOrders: getOrders
        };

        function authenticate(username, password) {
            return $http({
                method: "POST",
                url: "/loginUser",
                responseType: "json",
                params: {username: username, password: password}
            }).then(function (response) {
                console.log(response);
            });
        }

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