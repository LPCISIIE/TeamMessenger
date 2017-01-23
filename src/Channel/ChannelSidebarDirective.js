import app from '../app'

app.directive('channelSidebar', ['$routeParams', 'Channel', function ($routeParams, Channel) {
  return {
    restrict: 'E',
    templateUrl: 'partials/channel/channel-sidebar-directive.html',
    link: function ($scope, element, attrs) {
      $scope.channels = Channel.query()
      $scope.activeChannelId = $routeParams.id
    }
  }
}])
