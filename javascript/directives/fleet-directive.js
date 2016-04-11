(function () {
    angular.module('fleetManager')

    .directive('fleetDisplay', function () {
        return {
            restrict: 'E',
            templateUrl : '/templates/directives/fleet-display.html',
            link: function (scope, element, attrs) {
                var tonnage = 0.0;
                if (scope.fleet.containers != null) {
                    scope.fleet.containers.forEach(function (item) {
                        tonnage = tonnage + item.tonnage;
                    });
                }

                scope.fleet.totalTonnage = tonnage;
                scope.isSelected = {};
               

            }
        };
    });
})();