import app from '../app'

app.directive('postForm', ['Post', function (Post) {
  return {
    restrict: 'E',
    templateUrl: 'partials/post/post-form-directive.html',
    scope: {
      channelId: '=',
      posts: '='
    },
    link: ($scope, element, attrs) => {
      $scope.submit = (event) => {
        if (event.key === 'Enter') {
          window.$(event.target).val('')
          Post.save({ channel_id: $scope.channelId }, $scope.post, (response) => {
            $scope.posts = Post.query({channel_id: $scope.channelId})
          })
        }
      }
    }
  }
}])
