(function() {
    'use strict';
    angular.module('soloApp')
        .controller('LoginCtrl', ['$scope', 'AdminService', LoginCtrl]);

    function LoginCtrl($scope, AdminService) {
        $scope.login = login;

        function login() {
            AdminService.authenticate($scope.credentials).then(function(data) {
                $scope.errors = {};
                if (data == 0) {
                    $scope.errors.wrong = true;
                }
            });
        }
    }
}());
