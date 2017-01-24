import { app, $ } from '../app'

app.directive('posts', ['Post', 'Member', function (Post, Member) {
  return {
    restrict: 'E',
    templateUrl: 'partials/post/posts-directive.html',
    scope: {
      channel: '=',
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

      $scope.getRandomName = () => names[Math.floor(Math.random() * names.length)]

      $scope.members = Member.query()

      $scope.getPostMember = (post) => {
        for (let member of $scope.members) {
          if (member._id === post.member_id) {
            return member
          }
        }
      }

      $scope.delete = (post) => {
        Post.delete({channel_id: $scope.channel._id, post_id: post._id}, () => {
          Post.query({channel_id: $scope.channel._id}, (posts) => {
            $scope.posts = posts
          })
        })
      }

      $scope.edit = (post) => {
      }

      $scope.scrollToLast = () => {
        $('html, body').animate({
          scrollTop: $('#last-comment').offset().top
        }, 'fast')
      }
    }
  }
}])
