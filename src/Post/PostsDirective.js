import { $ } from '../main'

export default function PostsDirective (Post, Member) {
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

      $scope.loading = true
      $scope.editPost = ''
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
        $scope.editPost = ''
        Post.delete({channel_id: $scope.channel._id, post_id: post._id}, () => {
          $scope.loading = true
          Post.query({channel_id: $scope.channel._id}, (posts) => {
            $scope.posts = posts
          })
        })
      }

      $scope.edit = (post) => {
        $scope.editPost = ''
        Post.update({channel_id: $scope.channel._id, post_id: post._id}, post, () => {
          $scope.loading = true
          Post.query({channel_id: $scope.channel._id}, (posts) => {
            $scope.posts = posts
          })
        })
      }

      $scope.editForm = (post) => {
        $scope.editPost = post._id
      }

      $scope.scrollToLast = () => {
        $scope.loading = false
        $('html, body').animate({
          scrollTop: $('#last-comment').offset().top
        }, 'fast')
      }

      /* if ($scope.posts.length === 0) {
        $scope.loading = false
      } */
    }
  }
}
