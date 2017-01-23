import app from './app'

app.config(['$httpProvider', '$routeProvider', 'api', function ($httpProvider, $routeProvider, api) {
  $httpProvider.defaults.headers.common.Authorization = 'Token token=' + api.key

  $httpProvider.interceptors.push(['TokenService', function (TokenService) {
    return {
      request: function (config) {
        let token = TokenService.getToken()
        if (token != null) {
          config.url += ((config.url.indexOf('?') >= 0) ? '&' : '?') + 'token=' + token
        }
        return config
      }
    }
  }])

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
    .when('/channels', {
      templateUrl: 'partials/create-channel.html',
      controller: 'ChannelCreatorCtrl'
    })
    .when('/channels/:id', {
      templateUrl: 'partials/channel.html',
      controller: 'ChannelShowCtrl'
    })
    .otherwise({redirectTo: '/'})
}])
