angular.module('DeftonesDirective',[])
    .directive('deftonesNavbar', function() {
      return {
        restrict: 'E',    // E -> element
        templateUrl: 'templates/directives/deftones-navbar.html'
      };
    })
    .directive('deftonesFooter', function() {
      return {
        restrict: 'E',    // E -> element
        templateUrl: 'templates/directives/deftones-footer.html'
      };
    });