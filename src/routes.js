
export default function route ($routeProvider) {
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
    .when('/channels/add', {
      templateUrl: 'partials/channel/channel-creation.html',
      controller: 'ChannelCreationCtrl'
    })
    .when('/channels/:id', {
      templateUrl: 'partials/channel/channel-view.html',
      controller: 'ChannelViewCtrl'
    })
    .otherwise({redirectTo: '/'})
}
