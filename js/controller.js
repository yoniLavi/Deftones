angular.module('RouteControllers', [])
    .controller('HomeController', function($scope, store) {
        $scope.title = 'deftones home page!';
        $scope.username = store.get('username');
    })
    .controller('TourController', function($scope, store) {
        $scope.title = 'deftones tour page!';
        $scope.username = store.get('username');
    })
    .controller('StoreController', function($scope, store) {
        $scope.title = 'deftones store page!';
        $scope.username = store.get('username');
    })
    .controller('BandController', function($scope, store) {
        $scope.title = 'deftones band page!';
        $scope.username = store.get('username');
    })
    .controller('MusicController', function($scope, store) {
        $scope.title = 'deftones music page!';
        $scope.username = store.get('username');
    })
