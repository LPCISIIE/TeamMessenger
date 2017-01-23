import app from '../app'

app.controller('ChannelCreationCtrl', ['$scope', '$location', '$routeParams', 'Channel', 'Auth', function ($scope, $location, $routeParams, Channel, Auth) {
  if (!Auth.check()) {
    $location.path('/login')
  }

  $scope.create = function () {
    Channel.save($scope.channel, function (response) {
      $location.path('/channels/' + response._id)
    }, function (response) {
      $scope.error = response.data.error
    })
  }

  $scope.update = function () {
    Channel.update($scope.channel).then(function (response) {
      $location.path('/channels/' + response._id)
    }, function (response) {
      $scope.error = response.data.error
    })
  }
}])
