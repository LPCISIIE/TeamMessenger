
export default function ChannelViewController ($scope, $routeParams, Channel, Post) {
  Channel.get({id: $routeParams.id}, (channel) => {
    $scope.channel = channel
  })

  Post.query({channel_id: $routeParams.id}, (posts) => {
    $scope.posts = posts
  })
}
