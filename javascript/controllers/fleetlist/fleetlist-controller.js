(function () {

    var allFleetKey = 'allFleetKey';

    angular.module('fleetManager')

    .controller('FleetListController', ['$http', function ($http) {
        var fleetList = this;
        fleetList.fleets = [];
        this.newFleetName = '';
        this.currentFleet = {};

        this.saveFleet = function () {
            if (window.localStorage) {
                console.log('Local Storage Supported');
                window.localStorage.setItem(allFleetKey, JSON.stringify(fleetList.fleets));
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

            var lowerCaseArray = fleetList.fleets.map(function (obj) {
                var searchElement = obj.name.toLowerCase();
                return searchElement;
            });

            var newName = this.newFleetName.toLowerCase();
            var x = lowerCaseArray.indexOf(newName);

            if (x != -1) {
                alert(this.newFleetName + ' already exists, fleet names must be unique');
                return;
            }

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
                fleetList.fleets = JSON.parse(localStorage.getItem(allFleetKey));
            }
            else {
                console.log('local storage was empty');
            }
        }
        if (!fleetList.fleets || fleetList.fleets.length === 0) {
            $http.get('/Data/fleets.json').success(function (data) {
                fleetList.fleets = data;
            });
        }
    }]);
})();