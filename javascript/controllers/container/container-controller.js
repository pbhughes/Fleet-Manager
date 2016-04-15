(function () {
    angular.module('fleetManager')
    .controller('ContainerController', ['$http', '$routeParams', '$scope', function ($http, $routeParams, $scope) {
        $scope.ID = $routeParams.id;
        $scope.tonnage = 0.00;
        $scope.material = '';
    }]);
})();