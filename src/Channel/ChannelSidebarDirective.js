
export default function ChannelSidebarDirective ($routeParams, Channel) {
  return {
    restrict: 'E',
    templateUrl: 'partials/channel/channel-sidebar-directive.html',
    link: ($scope, element, attrs) => {
      $scope.channels = Channel.query()
      $scope.activeChannelId = $routeParams.id
    }
  }
}
