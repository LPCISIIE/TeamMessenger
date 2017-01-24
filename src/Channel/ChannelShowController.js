import { app } from '../app'

app.controller('ChannelShowCtrl', ['$scope', '$routeParams', 'Channel', 'Post', 'Member', function ($scope, $routeParams, Channel, Post, Member) {
  $scope.channel = Channel.get({id: $routeParams.id})
  $scope.posts = Post.query({channel_id: $routeParams.id})
  $scope.members = Member.query()

  $scope.getPostMember = (post) => {
    for (let member of $scope.members) {
      if (member._id === post.member_id) {
        return member
      }
    }
  }
}])
