(function () {
    
    var userKey = 'userKey';

    angular.module('fleetManager')

    .controller('ViewController', function () {
        this.isLoggedIn = false;
        this.loggedInUserName = "";
        this.userName = "";
        this.password = "";
        this.message = "";
        this.stayLoggedIn = false;
        this.init = function () {
            if (window.sessionStorage) {
                var currentUser = sessionStorage.getItem(userKey)
                if (currentUser) {
                    var currentUser = JSON.parse(currentUser);
                    this.isLoggedIn = true;
                    this.userName = currentUser.name;
                    this.loggedInUserName = currentUser.name;
                }
            }
        };

        this.logIn = function () {
            if (this.userName === 'barkley' && this.password === 'barkley') {
                this.isLoggedIn = true;
                this.loggedInUserName = this.userName;
                this.userName = "";
                this.password = "";
                this.message = "";
                var loggedInUser = {
                    name: this.loggedInUserName,
                    loggedInDate: new Date()
                };

                if (this.stayLoggedIn) {
                    sessionStorage.setItem(userKey, JSON.stringify(loggedInUser));
                }

                window.location.href = '/#/fleetlist';
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
            sessionStorage.clear();
        };

        this.init();
    });
})();