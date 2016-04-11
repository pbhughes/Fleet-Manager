(function () {
    angular.module('fleetManager')

      .filter('capitalize', function () {
          return function (input) {
              var upper = input.toUpperCase();
              return upper;
          }
      });
})();