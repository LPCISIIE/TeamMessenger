import { app, $ } from '../app'

app.directive('post', ['Post', function (Post) {
  return {
    restrict: 'E',
    templateUrl: 'partials/post/post-directive.html',
    scope: {
      channelId: '=',
      post: '=',
      member: '=',
      posts: '='
    },
    link: ($scope, element, attrs) => {
      let names = [
        'matt',
        'elliot',
        'jenny',
        'joe',
        'stevie',
        'steve',
        'christian',
        'helen',
        'justen',
        'laura'
      ]

      $scope.name = names[Math.floor(Math.random() * names.length)]

      $scope.delete = () => {
        Post.delete({channel_id: $scope.channelId, post_id: $scope.post._id}, () => {
          $scope.posts = Post.query({channel_id: $scope.channelId}, () => {
            $('html, body').animate({
              scrollTop: $('#comments_bottom').offset().top
            }, 'fast')
          })
        })
      }

      $scope.edit = () => {
      }
    }
  }
}])
