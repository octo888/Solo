(function() {
    'use strict';
    angular.module('soloApp')
        .controller('LoginCtrl', ['$scope', 'AdminService', LoginCtrl]);

    function LoginCtrl($scope, AdminService) {
        $scope.login = login;

        function login() {
            AdminService.authenticate($scope.credentials.username, $scope.credentials.password).then(function() {

            });
        }
    }
}());
