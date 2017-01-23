import app from '../app'

app.directive('postForm', ['Post', function (Post) {
  return {
    restrict: 'E',
    templateUrl: 'partials/post/post-form-directive.html',
    scope: {
      channelId: '=',
      posts: '='
    },
    link: function ($scope, element, attrs) {
      $scope.submit = function (event) {
        if (event.key === 'Enter') {
          window.$(event.target).val('')
          Post.save({ channel_id: $scope.channelId }, $scope.post, function (response) {
            $scope.posts = Post.query({channel_id: $scope.channelId})
          })
        }
      }
    }
  }
}])
