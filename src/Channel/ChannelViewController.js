import { $ } from '../main'

export default function ChannelViewController ($scope, $routeParams, $location, Channel, Post) {
  $('.ui.dropdown').dropdown()

  Channel.get({ id: $routeParams.id }, (channel) => {
    $scope.channel = channel
  })

  Post.query({ channel_id: $routeParams.id }, (posts) => {
    $scope.posts = posts
  })

  $scope.editForm = () => {
    $scope.editChannel = true
  }

  $scope.edit = () => {
    Channel.update({ id: $scope.channel._id }, $scope.channel, () => {
      $scope.editChannel = false
    })
  }

  $scope.delete = () => {
    Channel.delete({ id: $scope.channel._id }, () => $location.path('/'))
  }
}
