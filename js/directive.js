angular.module('ToDoDirective',[])
    .directive('todoNavbar', function() {
      return {
        restrict: 'E',    // E -> element
        templateUrl: 'templates/directives/todo-navbar.html'
      };
    });
