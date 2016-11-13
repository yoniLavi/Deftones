angular.module('Deftones', ['ngRoute', 'angular-storage', 'RouteControllers',
                           'UserService', 'ToDoDirective']);

angular.module('Deftones').config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/tour', {
        templateUrl: 'templates/tour.html',
        controller: 'TourController'
    })
    .when('/store', {
        templateUrl: 'templates/store.html',
        controller: 'StoreController'
    })
    .when('/band', {
        templateUrl: 'templates/band.html',
        controller: 'BandController'
    })
    .when('/music', {
        templateUrl: 'templates/music.html',
        controller: 'MusicController'
    })
});