var app = angular.module('coop', ['ngResource', 'ngRoute']);
app.constant('api', {
    'key': '9fb1719917e849c1972265af1e7cc437',
    'url': 'http://coop.api.netlor.fr/api'
});

app.service('TokenService', [function () {
    this.setToken = function (token) {
        localStorage.setItem('token', token);
    }

    this.getToken = function () {
        return localStorage.getItem('token');
    }

    this.removeToken = function () {
        localStorage.removeItem('token');
    };
}]);

app.config(['$httpProvider', '$routeProvider', 'api', function ($httpProvider, $routeProvider, api) {
    $httpProvider.defaults.headers.common.Authorization = 'Token token=' + api.key;

    $httpProvider.interceptors.push(['TokenService', function (TokenService) {
        return {
            request: function (config) {
                let token = TokenService.getToken();
                if (token != null) {
                    config.url += ((config.url.indexOf('?') >= 0) ? '&' : '?')
                        + 'token=' + token;
                }
                return config;
            }
        };
    }]);

    $routeProvider
        .when('/', {templateUrl: 'partials/home.html'})
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'AuthCtrl'
        })
        .when('/register', {
            templateUrl: 'partials/register.html',
            controller: 'AuthCtrl'
        })
        .otherwise({redirectTo: '/'});
}]);

app.factory('Member', ['$resource', 'api', function ($resource, api) {
    return $resource(api.url + '/members/:id', {id: '@_id'}, {
        get: {url: api.url + '/members/:id/signedin'},
        update: {method: 'PUT'},
        signin: {method: 'POST', url: api.url + '/members/signin'},
        signout: {method: 'DELETE', url: api.url + '/members/signout'}
    });
}]);

app.factory('Auth', ['$rootScope', 'TokenService', 'Member', function ($rootScope, TokenService, Member) {
    let auth = {
        check: function () {
            $rootScope.loggedIn = TokenService.getToken() != null;
            return $rootScope.loggedIn;
        },
        login: function (credentials) {
            let _this = this;
            return Member.signin(credentials, function (member) {
                TokenService.setToken(member.token);
                _this.setMemberId(member._id);
                $rootScope.member = member;
                $rootScope.loggedIn = true;
            }).$promise;
        },
        register: function (credentials) {
            return Member.save(credentials).$promise;
        },
        logout: function () {
            // Member.signout(function () {
                TokenService.removeToken();
                $rootScope.member = {};
                $rootScope.loggedIn = false;
            // });
        },
        setMemberId: function (id) {
            return localStorage.setItem('member_id', id);
        },
        getMemberId: function () {
            return localStorage.getItem('member_id');
        },
        getMember: function () {
            if (!this.check())
                return null;

            return Member.get({id: this.getMemberId()}).$promise;
        }
    };

    auth.check();
    /*auth.getMember().then(function (response) {
        $rootScope.member = response.data;
    });*/

    return auth;
}]);

app.controller('NavbarCtrl', ['$scope', '$location', 'Auth', function ($scope, $location, Auth) {
    $scope.logout = function () {
        Auth.logout();
        $location.path('/');
    };
}]);

app.controller('AuthCtrl', ['$scope', '$location', 'Auth', function ($scope, $location, Auth) {

    if (Auth.check())
        $location.path('/');

    $scope.member = {};
    $scope.newMember = {};

    $scope.login = function () {
        Auth.login($scope.member).then(function (response) {
            $location.path('/');
        }, function (response) {
            $scope.error = response.data.error;
        });
    };

    $scope.register = function () {
        Auth.register($scope.newMember).then(function (response) {
            $location.path('/');
        }, function (response) {
            $scope.error = response.data.error instanceof Array ? response.data.error[0][0] : response.data.error;
        });
    };

}]);
