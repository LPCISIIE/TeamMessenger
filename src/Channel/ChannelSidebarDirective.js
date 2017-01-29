
export default function ChannelSidebarDirective ($routeParams, Channel) {
  return {
    restrict: 'E',
    templateUrl: 'partials/channel/channel-sidebar-directive.html',
    link: ($scope, element, attrs) => {
      Channel.query((channels) => {
        $scope.channels = channels
      })
      $scope.activeChannelId = $routeParams.id
    }
  }
}
