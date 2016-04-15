(function () {
    angular.module('fleetManager').config(function ($routeProvider) {
        $routeProvider
            .when('/login', {
            templateUrl: "/templates/pages/login/index.html", controller: 'ViewController'
            })
        .when('/fleetlist', {
            templateUrl: "/templates/pages/fleetlist/index.html", controller: 'FleetListController'
        })
        .when('/fleet/:name', {
            templateUrl : '/templates/pages/fleet/index.html', controller: "FleetController"
        })
        .when('/container/add', {
            templateUrl : "/templates/pages/container/add.html", controller : 'CointainerController'
        })
        .when('/container/:id', {
            templateUrl: '/templates/pages/container/index.html', controller : 'ContainerController', controllerAs: 'container'
        });
    });
})();