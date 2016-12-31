angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = 'deftones home page!';
    })
    .controller('TourController', function($scope, TourAPIService) {
        TourAPIService.getTours().then(function(result){
            $scope.tours=result.data;
        });
    })
    .controller('StoreController', function($scope) {
        $scope.title = 'deftones store page!';
    })
    .controller('BandController', function($scope) {
        $scope.title = 'deftones band page!';
    })
    .controller('MusicController', function($scope) {
        $scope.title = 'deftones music page!';
    })
    .controller('RegisterController', function($scope, $location) {
        $scope.submitForm = function() {
            $location.path('/');
            setTimeout(function(){
                alert('Congratulations! You are now a member of this site'); }, 1000);
        };
        $scope.canForm = function() {
            $location.path('/');
        }
    })
