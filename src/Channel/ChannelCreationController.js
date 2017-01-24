import app from '../app'

app.controller('ChannelCreationCtrl', ['$scope', '$location', 'Channel', 'Auth', function ($scope, $location, Channel, Auth) {
  if (!Auth.check()) {
    $location.path('/login')
  }

  $scope.create = function () {
    Channel.save($scope.channel, (response) => {
      $location.path('/channels/' + response._id)
    }, (response) => {
      $scope.error = response.data.error
    })
  }

  $scope.update = () => {
    Channel.update($scope.channel).then((response) => {
      $location.path('/channels/' + response._id)
    }, (response) => {
      $scope.error = response.data.error
    })
  }
}])
