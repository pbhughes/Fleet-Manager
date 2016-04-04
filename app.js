(function () {
    var app = angular.module('fleetManager', []);

    app.controller('ViewController', function () {
       
        this.isLoggedIn = false;
        this.loggedInUserName = "";
        this.userName = "";
        this.password = "";
        this.message = "";

        this.logIn = function () {
            if (this.userName === 'barkley' && this.password === 'barkley') {
                this.isLoggedIn = true;
                this.loggedInUserName = this.userName;
                this.userName = "";
                this.password = "";
                this.message = "";
            }
            else {
                this.isLoggedIn = false;
                this.password = "";
                $('#txtUserName').focus();
                $('#txtUserName').select();
                this.message = "Invalid user name or password.";
            }
        };

        this.logOut = function () {
            this.isLoggedIn = false;
        };
    });

    app.controller('FleetListController',['$http', function ($http) {
        var fleetList = this;
        fleetList.fleets = [];
        this.newFleetName = '';
        this.currentFleet = {};

        this.saveFleet = function() {
            if (window.localStorage) {
                console.log('Local Storage Supported');
                window.localStorage.setItem('allFleet',JSON.stringify(fleetList.fleets));
            }
            else {
                console.log('Local storage is not supported');
            }
        
        };
        this.removeFleet = function () {
            fleetList.fleets.forEach(function (item) {
                if (item.isSelected) {
                    if (confirm("Are you sure you want to remove fleet: " + item.name)) {
                        var index = fleetList.fleets.indexOf(item);
                        fleetList.fleets.splice(index, 1);
                    }
                }
            });
        };

        this.addFleet = function () {
            var fleet = {
                ID: this.fleets.length,
                name: this.newFleetName,
                type: 'remote',
                pocName: '',
                pocEmail: ''
            };
            fleetList.fleets.push(fleet);
        }

        if (window.localStorage) {
            if (localStorage.length > 0) {
                console.log('Local storage had something');
                fleetList.fleets = JSON.parse(localStorage.getItem('allFleet'));
            }
            else {
                console.log('local storage was empty');
            }
            
        }
        if(! fleetList.fleets || fleetList.fleets.length === 0)
        {
            $http.get('/Data/fleets.json').success(function (data) {
                fleetList.fleets = data;
            });
        }        

    }]);

    app.directive('fleetDisplay', function () {
        return {
            restrict: 'E',
            templateUrl: "Directives/fleet-display.html",
            link: function (scope, elem, attrs) {
                var tonnage = 0.0;
                scope.fleet.containers.forEach(function (item) {
                    tonnage = tonnage + item.tonnage;
                });
                scope.fleet.totalTonnage = tonnage;
                scope.isSelected = {};

                
            }
        };
    });
})();