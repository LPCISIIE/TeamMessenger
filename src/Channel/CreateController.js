import app from '../app'

app.controller('ChannelCtrl', ['$scope', '$location', '$routeParams', 'ChannelService', 'Auth', function ($scope, $location, $routeParams, ChannelService, Auth) {
  if (!Auth.check()) {
    $location.path('/login')
  }

  $scope.channel = {}

  $scope.get = function () {
    ChannelService.get($scope.channel).then(function (response) {
      $scope.channel = response
      return $scope.channel
    }, function (response) {
      $scope.error = response.data.error
    })
  }

  $scope.create = function () {
    Channel.save($scope.channel, function (response) {
      $location.path('/channels/' + response._id)
    }, function (response) {
      $scope.error = response.data.error
    })
  }

  $scope.update = function () {
    ChannelService.update($scope.channel).then(function (response) {
      $location.path('/channels/' + response._id)
    }, function (response) {
      $scope.error = response.data.error
    })
  }
}])
