import { app, $ } from '../app'

app.directive('postForm', ['Post', function (Post) {
  return {
    restrict: 'E',
    templateUrl: 'partials/post/post-form-directive.html',
    scope: {
      channelId: '=',
      posts: '='
    },
    link: ($scope, element, attrs) => {
      $scope.onKeyup = (event) => {
        let field = $(event.target)
        field.css('overflow', 'hidden')
        field.css('height', 0)
        field.css('height', field.prop('scrollHeight') + 'px')

        if (event.key === 'Enter') {
          field.val('')
          Post.save({ channel_id: $scope.channelId }, $scope.post, (response) => {
            $scope.posts = Post.query({channel_id: $scope.channelId})
            $('html, body').animate({
              scrollTop: field.offset().top
            }, 'fast')
          })
        }
      }
    }
  }
}])
