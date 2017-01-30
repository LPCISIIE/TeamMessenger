
export default function ChannelCreationController ($scope, $location, Channel, Auth) {
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
}
