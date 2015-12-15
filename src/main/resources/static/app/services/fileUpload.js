/**
 * Created by Viktor Moroz on 12/2/15.
 */

(function() {
    angular.module('soloApp')
        .service('fileUpload', ['$http', fileUpload]);

    function fileUpload($http) {
        this.uploadFileToUrl = function (fd, uploadUrl) {

            $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            })
                .success(function () {

                })
                .error(function () {
                });
        }
    }
}());