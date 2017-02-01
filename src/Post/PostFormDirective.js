import { $ } from '../main'

export default function PostFormDirective (Post) {
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

        if (event.key === 'Enter') {
          field.val('')
          Post.save({ channel_id: $scope.channelId }, $scope.post, () => {
            Post.query({ channel_id: $scope.channelId }, (posts) => {
              $scope.posts = posts
            })
          })
        }

        field.css('overflow', 'hidden')
        field.css('height', 0)
        field.css('height', field.prop('scrollHeight') + 'px')
      }
    }
  }
}

PostFormDirective.$inject = ['Post']
