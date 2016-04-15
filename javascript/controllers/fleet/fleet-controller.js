(function () {
    angular.module('fleetManager')

    .controller('FleetController', ['$http', '$routeParams', '$scope', function ($http, $routeParams, $scope) {
       $scope.name = $routeParams.name;
    }]);
})();

//scope.addFleet = function () {
//    window.location.href = "/#/container/add";
//}