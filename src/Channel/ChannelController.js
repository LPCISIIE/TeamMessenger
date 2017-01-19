import app from '../app'

app.controller('ChannelCtrl', ['$scope', '$location', '$routeParams', 'Channel', 'Auth', function ($scope, $location, $routeParams, Channel, Auth) {
  if (Auth.check()) {
    $scope.channel = {}

    $scope.get = function () {
      Channel.get($scope.channel).then(function (response) {
        $location.path('/channels/' + $routeParams.channelId)
      }, function (response) {
        $scope.error = response.data.error
      })
    }

    $scope.create = function () {
      Channel.create($scope.channel).then(function (response) {
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
  }

  $location.path('/login')
}])
