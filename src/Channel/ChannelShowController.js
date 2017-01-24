import { app } from '../app'

app.controller('ChannelShowCtrl', ['$scope', '$routeParams', 'Channel', 'Post', function ($scope, $routeParams, Channel, Post) {
  Channel.get({id: $routeParams.id}, (channel) => {
    $scope.channel = channel
  })

  Post.query({channel_id: $routeParams.id}, (posts) => {
    $scope.posts = posts
  })
}])
