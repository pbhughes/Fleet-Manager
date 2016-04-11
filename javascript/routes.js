(function () {
    angular.module('fleetManager').config(function ($routeProvider) {
        $routeProvider
            .when('/login', {
            templateUrl: "/templates/pages/login/index.html", controller: 'ViewController'
            })
        .when('/fleetlist', {
            templateUrl: "/templates/pages/fleetlist/index.html", controller: 'FleetListController'
        })
        .when('/fleet', {
            templateUrl : '/templates/pages/fleet/index.html'
        })
        .when('/container/add', {
            templateUrl : "/templates/pages/container/add.html", controller : 'CointainerController'
        });
    });
})();