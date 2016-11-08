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
    .controller('RegisterController', function($scope, $q, $location, UserAPIService, store) {
        $scope.submitForm = function() {
            if (!$scope.registrationForm.$valid) {
                return;
            }
            UserAPIService.register($scope.user.username, $scope.user.password
            ).then(function(results) {
                console.log('Successfully registered the user', results.data.username);
                store.set('username', results.data.username);
                return UserAPIService.login($scope.user.username, $scope.user.password);
            }).catch(function(err) {
                console.log('Registration failed:', err);
                return $q.reject(err);
            }).then(function(results) {
                store.set('authToken', results.data.token);
                console.log('Successfully logged in with the token', results.data.token);
                $location.path("/todo");
            }).catch(function(err) {
                console.log('Login failed:', err);
            });
        };
    })
    .controller('LoginController', function($scope, $location, UserAPIService, store) {
        $scope.submitForm = function() {
            if (!$scope.loginForm.$valid) {
                return;
            }
            UserAPIService.login($scope.user.username, $scope.user.password
            ).then(function(results) {
                store.set('username', $scope.user.username);
                store.set('authToken', results.data.token);
                console.log('Successfully logged in with the token', results.data.token);
                $location.path("/todo");
            }).catch(function(err) {
                console.log('Login failed:', err);
            });
        };
    })
    .controller('LogoutController', function(store) {
        store.remove('username');
        store.remove('authToken');
    })
