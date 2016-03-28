(function () {
    var app = angular.module('fleetManager', []);

    app.controller('ViewController', function () {
        this.isLoggedIn = false;
        this.userName = "";
        this.password = "";
        this.message = "";

        this.logIn = function () {

            if (this.userName === 'barkley' && this.password === 'barkley') {
                this.isLoggedIn = true;
                this.userName = "";
                this.password = "";
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
   
    app.controller('FleetController',['$http', function ($http) {

        this.fleets =  [
        {
            ID: 1,
            name: 'In Bound Barges',
            type: 'remote',
            pocName: '',
            pocEmail: '',
            pocPhone: ''
        },
        {
            ID: 2,
            name: 'Loading Dock',
            type: 'remote',
            pocName: '',
            pocEmail: '',
            pocPhone: ''
        },
        {
            ID: 3,
            name: 'Up River Staging 1',
            type: 'remote',
            pocName: '',
            pocEmail: '',
            pocPhone: ''
        },
        {
            ID: 3,
            name: 'Up River Staging 2',
            type: 'remote',
            pocName: '',
            pocEmail: '',
            pocPhone: ''
        }
        ];
    }]);

})();