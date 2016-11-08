const BACKEND_URL = 'https://morning-castle-91468.herokuapp.com/';

angular.module('UserService', [])
    .factory('UserAPIService', function($http, store) {
        UserAPIService = {
            register: function(username, password) {
                var data = {username: username, password: password};
                var url = BACKEND_URL + 'accounts/register/';
                return $http.post(url, data);
            },
            login: function(username, password) {
                var data = {username: username, password: password};
                var url = BACKEND_URL + 'accounts/api-token-auth/';
                return $http.post(url, data);
            },
        };
        return UserAPIService;
    });
