app.controller('ChannelShowCtrl', ['$scope', '$location', '$routeParams', 'Channel', 'Auth', function ($scope, $location, $routeParams, Channel, Auth) {

  if (!Auth.check()) {
    $location.path('/login')
  }

  


}])
