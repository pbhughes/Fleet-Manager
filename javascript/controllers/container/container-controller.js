(function () {
    angular.module('')
    .controller('ContainerController', ['$http'], function ($http) {
        this.ID = '';
        this.tonnage = 0.00;
        this.material = '';
    });
})();