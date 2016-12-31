angular.module('TourService', [])
    .factory('TourAPIService', function($http) {
        TourAPIService = {
            getTours: function() {
                var url = '/data/tour.json';
                return $http.get(url);
            },
        };
        return TourAPIService;
    });
