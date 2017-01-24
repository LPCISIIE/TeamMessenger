import { app } from '../app'

app.controller('ChannelShowCtrl', ['$scope', '$routeParams', 'Channel', 'Post', function ($scope, $routeParams, Channel, Post) {
  $scope.channel = Channel.get({id: $routeParams.id})
  $scope.posts = Post.query({channel_id: $routeParams.id})
}])
