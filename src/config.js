import app from './app'

app.config(['$httpProvider', '$routeProvider', 'api', function ($httpProvider, $routeProvider, api) {
  $httpProvider.defaults.headers.common.Authorization = 'Token token=' + api.key

  $httpProvider.interceptors.push(['TokenService', function (TokenService) {
    return {
      request: (config) => {
        let token = TokenService.getToken()
        if (token != null) {
          config.url += ((config.url.indexOf('?') >= 0) ? '&' : '?') + 'token=' + token
        }
        return config
      }
    }
  }])

  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    })
    .when('/login', {
      templateUrl: 'partials/auth/login.html',
      controller: 'LoginCtrl'
    })
    .when('/register', {
      templateUrl: 'partials/auth/register.html',
      controller: 'RegisterCtrl'
    })
    .when('/channels', {
      templateUrl: 'partials/channel/channel-creation.html',
      controller: 'ChannelCreationCtrl'
    })
    .when('/channels/:id', {
      templateUrl: 'partials/channel/channel-view.html',
      controller: 'ChannelShowCtrl'
    })
    .otherwise({redirectTo: '/'})
}])
