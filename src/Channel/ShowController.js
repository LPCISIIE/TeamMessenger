import app from '../app'

app.controller('ChannelShowCtrl', ['$scope', '$location', '$routeParams', 'Channel', function ($scope, $location, $routeParams, Channel) {
  $scope.channels = {'channel': Channel.getAll()}

  console.log($scope.channels)

}])
